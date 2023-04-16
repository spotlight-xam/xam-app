import { Dispatch, SetStateAction } from "react";

import { Subject, Observer } from "@helpers/observer";

import {
  BaseFormData,
  BaseFormEventHandler,
  FormOnFieldChangeEventHandler,
  FormOnFieldValidEventHandler,
  FormOnFieldDirtyEventHandler,
  FormOnFinishEventHandler,
  FormOnSubmitEventHandler,
  FieldData,
  FieldEvent,
  FieldEventUnion,
  FieldOption,
  FormEvent,
  FormEventUnion,
  FormOption,
  FormRef,
  IFormStore,
} from "./types";

export class FormStore<FormData extends BaseFormData = BaseFormData>
  implements IFormStore<FormData>, FormRef<FormData>
{
  private fieldDatas = {} as {
    [FieldKey in keyof FormData]: FieldData<FormData[FieldKey]>;
  };

  private formEventListeners = {
    onFinish: new Subject<FormEvent<"onFinish">, symbol, string>(
      Symbol("Form_onFinish_Subject")
    ),
    onSubmit: new Subject<FormEvent<"onSubmit">, symbol, string>(
      Symbol("Form_onSubmit_Subject")
    ),
  };

  private fieldEventListeners = {} as Record<
    keyof FormData,
    {
      [eventName in FieldEventUnion]: Subject<
        FieldEvent<eventName, FormData>,
        symbol,
        string
      >;
    }
  >;

  private formState:
    | {
        submittable: boolean;
        setSubmittable: (value: boolean) => void;
      }
    | undefined = undefined;

  constructor(private formOptions: FormOption<FormData>) {
    Object.entries(formOptions).forEach((entry) => {
      const fieldKey = entry[0] as keyof FormData;
      const fieldOption = entry[1] as FieldOption<any>;
      this.fieldDatas[fieldKey] = {
        value: fieldOption.initialValue,
        setValue: () => {},
        isValid: undefined,
        setIsValid: () => {},
        ref: {
          current: null,
        },
      };
    });
  }

  initializeEventListeners(fieldKey: keyof FormData) {
    if (this.fieldEventListeners[fieldKey]) {
      return this.fieldEventListeners[fieldKey];
    }

    const onFieldChange = new Subject<
      FieldEvent<"onFieldChange", FormData>,
      symbol,
      string
    >(Symbol(`Field_${String(fieldKey)}_onFieldChange_Subject`));

    const onFieldValid = new Subject<
      FieldEvent<"onFieldValid", FormData>,
      symbol,
      string
    >(Symbol(`Field_${String(fieldKey)}_onFieldValid_Subject`));

    const onFieldDirty = new Subject<
      FieldEvent<"onFieldDirty", FormData>,
      symbol,
      string
    >(Symbol(`Field_${String(fieldKey)}_onFieldDirty_Subject`));

    this.fieldEventListeners[fieldKey] = {
      onFieldChange,
      onFieldValid,
      onFieldDirty,
    };

    return this.fieldEventListeners[fieldKey];
  }

  private getFormEventListener(eventName: FormEventUnion) {
    return this.formEventListeners[eventName];
  }

  private getFieldEventListener(
    fieldKey: keyof FormData,
    eventName: FieldEventUnion
  ) {
    const fieldEventListener = this.fieldEventListeners[fieldKey];

    if (!fieldEventListener) {
      return this.initializeEventListeners(fieldKey)[eventName];
    }

    return fieldEventListener[eventName];
  }

  registerFormEventListener<FormEventName extends FormEventUnion>(
    eventName: FormEventName,
    handler: BaseFormEventHandler<FormEvent<FormEventName, FormData>>
  ): void {
    const formEventListener = this.getFormEventListener(eventName);
    const observer = new Observer(`Form_${eventName}_Observer`, handler);

    formEventListener.registerObserver(
      observer as Observer<FormEvent<"onFinish", BaseFormData>, string> &
        Observer<FormEvent<"onSubmit", BaseFormData>, string>
    );
  }

  unregisterFormEventListener(eventName: FormEventUnion) {
    const formEventListener = this.getFormEventListener(eventName);
    formEventListener.removeObserver(`Form_${eventName}_Observer`);
  }

  notifyFormEvent<FormEventName extends FormEventUnion>(
    eventName: FormEventName,
    value?: FormData
  ): void {
    const formEventListener = this.getFormEventListener(eventName) as Subject<
      FormEvent<FormEventName, FormData>,
      symbol,
      string
    >;

    formEventListener.notifyAllObservers({
      type: eventName,
      payload: value ?? this.getFormData(),
    } as FormEvent<FormEventName, FormData>);
  }

  registerFieldEventListener<
    FieldEventName extends FieldEventUnion,
    FieldKey extends keyof FormData
  >(
    fieldKey: FieldKey,
    eventName: FieldEventName,
    handler: BaseFormEventHandler<
      FieldEvent<FieldEventName, FormData, FieldKey>
    >
  ): void {
    const eventListener = this.getFieldEventListener(fieldKey, eventName);
    const observer = new Observer(
      `Field_${String(fieldKey)}_${eventName}_Observer`,
      handler
    );

    eventListener.registerObserver(
      observer as Observer<FieldEvent<FieldEventUnion, BaseFormData>, string>
    );
  }

  unregisterFieldEventListener(
    fieldKey: keyof FormData,
    eventName: FieldEventUnion
  ): void {
    const eventListener = this.getFieldEventListener(fieldKey, eventName);
    eventListener.removeObserver(
      `Field_${String(fieldKey)}_${eventName}_Observer`
    );
  }

  notifyFieldEvent<
    FieldEventName extends FieldEventUnion,
    FieldKey extends keyof FormData
  >(
    fieldKey: FieldKey,
    eventName: FieldEventName,
    value?: FormData[FieldKey]
  ): void {
    const eventListener = this.getFieldEventListener(
      fieldKey,
      eventName
    ) as Subject<
      FieldEvent<FieldEventName, FormData, FieldKey>,
      symbol,
      string
    >;

    eventListener.notifyAllObservers({
      type: eventName,
      payload: value ?? this.getFieldData(fieldKey)?.value,
      fieldKey,
    } as FieldEvent<FieldEventName, FormData, FieldKey>);
  }

  registerOrUpdateField<FieldKey extends keyof FormData>(
    fieldKey: FieldKey,
    { isValid, value, ref, setIsValid, setValue }: FieldData<FormData[FieldKey]>
  ): void {
    const prevState = this.getFieldData(fieldKey);

    if (prevState.value !== value) {
      this.notifyFieldEvent(fieldKey, "onFieldChange", value);
      this.fieldDatas[fieldKey].value = value;
    }

    if (prevState.isValid !== isValid) {
      if (isValid) {
        this.notifyFieldEvent(fieldKey, "onFieldValid", value);
      } else {
        this.notifyFieldEvent(fieldKey, "onFieldDirty", value);
      }
      this.fieldDatas[fieldKey].isValid = isValid;
    }

    if (prevState.setValue !== setValue) {
      this.fieldDatas[fieldKey].setValue = setValue;
    }

    if (prevState.setIsValid !== setIsValid) {
      this.fieldDatas[fieldKey].setIsValid = setIsValid;
    }

    if (prevState.ref.current !== ref.current) {
      this.fieldDatas[fieldKey].ref = ref;
    }

    const prevFormSubmittable = this.formState?.submittable;
    const currentFormSubmittable = this.isFinished();
    if (!prevFormSubmittable && currentFormSubmittable) {
      this.notifyFormEvent("onFinish", this.getFormData());
    }
  }

  unregisterField(fieldKey: keyof FormData) {
    delete this.fieldDatas[fieldKey];
  }

  deleteField(fieldKey: keyof FormData) {
    this.unregisterField(fieldKey);
    delete this.fieldEventListeners[fieldKey];
  }

  getKeys(): (keyof FormData | "submit")[] {
    const keys = Object.keys(this.formOptions);
    keys.push("submit");
    return keys as (keyof FormData | "submit")[];
  }

  getFormData(): FormData {
    const formData: FormData = {} as FormData;
    Object.entries(this.fieldDatas).forEach((entry) => {
      const fieldKey = entry[0] as keyof FormData;
      const fieldData = entry[1] as FieldData;

      formData[fieldKey] = fieldData.value as FormData[keyof FormData];
    });

    return formData;
  }

  getFieldOption<FieldKey extends keyof FormData>(
    fieldKey: FieldKey
  ): FieldOption<FormData[FieldKey]> {
    return this.formOptions[fieldKey];
  }

  getFieldData<FieldKey extends keyof FormData>(
    fieldKey: FieldKey
  ): FieldData<FormData[FieldKey]> {
    return this.fieldDatas[fieldKey];
  }

  registerOrUpdateFormState(
    submittable: boolean,
    setSubmittable: Dispatch<SetStateAction<boolean>>
  ) {
    if (!this.formState) {
      this.formState = {
        submittable,
        setSubmittable,
      };
      return;
    }

    if (this.formState.submittable !== submittable) {
      this.formState.submittable = submittable;
    }

    if (this.formState.setSubmittable !== setSubmittable) {
      this.formState.setSubmittable = setSubmittable;
    }
  }

  focus<FieldKey extends keyof FormData>(fieldKey: FieldKey) {
    const {
      ref: { current: refCurrent },
    } = this.getFieldData(fieldKey);
    if (refCurrent && refCurrent.focus) {
      refCurrent.focus();
    }
  }

  blur<FieldKey extends keyof FormData>(fieldKey: FieldKey) {
    const {
      ref: { current: refCurrent },
    } = this.getFieldData(fieldKey);
    if (refCurrent && refCurrent.blur) {
      refCurrent.blur();
    }
  }

  clear<FieldKey extends keyof FormData>(fieldKey: FieldKey) {
    const {
      ref: { current: refCurrent },
    } = this.getFieldData(fieldKey);
    if (refCurrent && refCurrent.clear) {
      refCurrent.clear();
    }
  }

  reset() {
    Object.keys(this.fieldDatas).forEach((fieldKey) => this.clear(fieldKey));
    throw new Error("reset not implemented");
  }

  submit() {
    this.notifyFormEvent("onSubmit");
  }

  isFocused<FieldKey extends keyof FormData>(fieldKey: FieldKey) {
    const {
      ref: { current: refCurrent },
    } = this.getFieldData(fieldKey);

    if (refCurrent && refCurrent.isFocused) {
      return refCurrent.isFocused();
    } else {
      console.warn(
        `isFocused not implemented for ${String(
          fieldKey
        )} Component, return false`
      );
      return false;
    }
  }

  isValid<FieldKey extends keyof FormData>(fieldKey: FieldKey): boolean {
    return (
      this.getFieldData(fieldKey).isValid ??
      !this.getFieldOption(fieldKey).required
    );
  }

  isFinished(): boolean {
    let finished = true;
    for (const fieldKey of Object.keys(this.fieldDatas)) {
      finished = finished && this.isValid(fieldKey);
    }

    this.formState?.setSubmittable(finished);

    return finished;
  }

  setData<FieldKey extends keyof FormData>(
    fieldKey: FieldKey,
    value: FormData[FieldKey]
  ) {
    return this.getFieldData(fieldKey)?.setValue(value);
  }

  setMultipleData(data: Partial<FormData>) {
    Object.entries(data).forEach(([fieldKey, value]) => {
      this.getFieldData(fieldKey)?.setValue(value);
    });
  }

  getData<FieldKey extends keyof FormData>(fieldKey: FieldKey) {
    return this.getFieldData(fieldKey)?.value;
  }
  getAllData() {
    return this.getFormData();
  }

  onFieldChange<FieldKey extends keyof FormData>(
    fieldKey: FieldKey,
    handler: FormOnFieldChangeEventHandler<FormData, FieldKey>
  ) {
    this.registerFieldEventListener(fieldKey, "onFieldChange", handler);
  }
  onFieldValid<FieldKey extends keyof FormData>(
    fieldKey: FieldKey,
    handler: FormOnFieldValidEventHandler<FormData, FieldKey>
  ) {
    this.registerFieldEventListener(fieldKey, "onFieldValid", handler);
  }
  onFieldDirty<FieldKey extends keyof FormData>(
    fieldKey: FieldKey,
    handler: FormOnFieldDirtyEventHandler<FormData, FieldKey>
  ) {
    this.registerFieldEventListener(fieldKey, "onFieldDirty", handler);
  }

  onFinish(handler: FormOnFinishEventHandler<FormData>) {
    this.registerFormEventListener("onFinish", handler);
  }
  onSubmit(handler: FormOnSubmitEventHandler<FormData>) {
    this.registerFormEventListener("onSubmit", handler);
  }
}
