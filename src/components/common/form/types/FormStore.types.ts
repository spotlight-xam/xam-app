import { Dispatch, SetStateAction } from "react";

import {
  FieldValuable,
  FieldOption,
  FieldChildProps,
  BaseFormData,
  FormEventUnion,
  FieldEventUnion,
} from "./Form.general.types";
import { BaseFormEventHandler, FormEvent, FieldEvent } from "./FormEvent.types";

/**
 * @summary T에서 K를 제외한 키들의 optional modifier를 제거한 타입
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 */
export type RequiredOmit<T, K extends keyof T> = Required<Omit<T, K>> &
  Pick<T, K>;

export type FieldData<FieldValue extends FieldValuable = FieldValuable> =
  RequiredOmit<FieldChildProps<FieldValue>, "isValid">;

export interface IFormStore<FormData extends BaseFormData = BaseFormData> {
  initializeEventListeners(fieldKey: keyof FormData): void;

  registerFormEventListener<FormEventName extends FormEventUnion>(
    eventName: FormEventName,
    handler: BaseFormEventHandler<FormEvent<FormEventName, FormData>>
  ): void;

  unregisterFormEventListener(eventName: FormEventUnion): void;

  notifyFormEvent<FormEventName extends FormEventUnion>(
    eventName: FormEventName,
    value?: FormData
  ): void;

  registerFieldEventListener<
    FieldEventName extends FieldEventUnion,
    FieldKey extends keyof FormData
  >(
    fieldKey: FieldKey,
    eventName: FieldEventName,
    handler: BaseFormEventHandler<
      FieldEvent<FieldEventName, FormData, FieldKey>
    >
  ): void;

  unregisterFieldEventListener(
    fieldKey: string | number | symbol,
    eventName: FieldEventUnion
  ): void;

  notifyFieldEvent<
    FieldEventName extends FieldEventUnion,
    FieldKey extends keyof FormData
  >(
    fieldKey: FieldKey,
    eventName: FieldEventName,
    value?: FormData[FieldKey]
  ): void;

  registerOrUpdateField<FieldKey extends keyof FormData>(
    fieldKey: FieldKey,
    fieldData: FieldData<FormData[FieldKey]>
  ): void;

  unregisterField(fieldKey: string | number | symbol): void;

  deleteField(fieldKey: string | number | symbol): void;

  getFormData(): BaseFormData;

  getFieldOption(
    fieldKey: string | number | symbol
  ): FieldOption<FieldValuable>;

  getFieldData<FieldKey extends keyof FormData>(
    fieldKey: FieldKey
  ): FieldData<FormData[FieldKey]> | undefined;

  registerOrUpdateFormState(
    submittable: boolean,
    setSubmittable: Dispatch<SetStateAction<boolean>>
  ): void;

  isFinished: () => boolean;
}
