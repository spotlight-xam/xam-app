import {
  FormEventUnion,
  FieldEventUnion,
  BaseFormData,
} from "./Form.general.types";

interface IBaseEvent<T> {
  payload: T;
}
export interface BaseFormEvent<T = any> extends IBaseEvent<T> {
  type: FormEventUnion | FieldEventUnion;
  fieldKey?: string | number | symbol;
}

export interface FormOnChangeEvent<
  FormData extends BaseFormData,
  FieldKey extends keyof FormData = keyof FormData
> extends BaseFormEvent<FormData[FieldKey]> {
  type: "onFieldChange";
  fieldKey: FieldKey;
}

export interface FormOnFieldValidEvent<
  FormData extends BaseFormData,
  FieldKey extends keyof FormData = keyof FormData
> extends BaseFormEvent<FormData[FieldKey]> {
  type: "onFieldValid";
  fieldKey: FieldKey;
}

export interface FormOnFieldDirtyEvent<
  FormData extends BaseFormData,
  FieldKey extends keyof FormData = keyof FormData
> extends BaseFormEvent<FormData[FieldKey]> {
  type: "onFieldDirty";
  fieldKey: FieldKey;
}

export interface FormOnFinishEvent<FormData extends BaseFormData>
  extends BaseFormEvent<FormData> {
  type: "onFinish";
}

export interface FormOnSubmitEvent<FormData extends BaseFormData>
  extends BaseFormEvent<FormData> {
  type: "onSubmit";
}

export type FormEvent<
  FormEventName extends FormEventUnion,
  FormData extends BaseFormData = BaseFormData
> = FormEventName extends "onFinish"
  ? FormOnFinishEvent<FormData>
  : FormEventName extends "onSubmit"
  ? FormOnSubmitEvent<FormData>
  : never;

export type FieldEvent<
  FieldEventName extends FieldEventUnion,
  FormData extends BaseFormData = BaseFormData,
  FieldKey extends keyof FormData = keyof FormData
> = FieldEventName extends "onFieldChange"
  ? FormOnChangeEvent<FormData, FieldKey>
  : FieldEventName extends "onFieldValid"
  ? FormOnFieldValidEvent<FormData, FieldKey>
  : never;

export interface BaseFormEventHandler<
  Event extends BaseFormEvent = BaseFormEvent
> {
  (event: Event): void;
}

export type FormOnFieldChangeEventHandler<
  FormData extends BaseFormData,
  FieldKey extends keyof FormData = keyof FormData
> = BaseFormEventHandler<FormOnChangeEvent<FormData, FieldKey>>;

export type FormOnFieldValidEventHandler<
  FormData extends BaseFormData,
  FieldKey extends keyof FormData = keyof FormData
> = BaseFormEventHandler<FormOnFieldValidEvent<FormData, FieldKey>>;

export type FormOnFieldDirtyEventHandler<
  FormData extends BaseFormData,
  FieldKey extends keyof FormData = keyof FormData
> = BaseFormEventHandler<FormOnFieldDirtyEvent<FormData, FieldKey>>;

export type FormOnFinishEventHandler<FormData extends BaseFormData> =
  BaseFormEventHandler<FormOnFinishEvent<FormData>>;

export type FormOnSubmitEventHandler<FormData extends BaseFormData> =
  BaseFormEventHandler<FormOnSubmitEvent<FormData>>;
