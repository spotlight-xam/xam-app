import { ReactNode } from "react";

import { BaseFormData } from "./Form.general.types";
import {
  FormOnFieldChangeEventHandler,
  FormOnFinishEventHandler,
  FormOnFieldValidEventHandler,
  FormOnSubmitEventHandler,
  FormOnFieldDirtyEventHandler,
} from "./FormEvent.types";

export interface FormRef<FormData extends BaseFormData> {
  focus: <FieldKey extends keyof FormData>(fieldKey: FieldKey) => void;
  blur: <FieldKey extends keyof FormData>(fieldKey: FieldKey) => void;
  clear: <FieldKey extends keyof FormData>(fieldKey: FieldKey) => void;
  reset: () => void;
  submit: () => void;

  isFocused: <FieldKey extends keyof FormData>(fieldKey: FieldKey) => boolean;
  isValid: <FieldKey extends keyof FormData>(fieldKey: FieldKey) => boolean;
  isFinished: () => boolean;

  setData: <FieldKey extends keyof FormData>(
    fieldKey: FieldKey,
    value: FormData[FieldKey]
  ) => void;
  setMultipleData: (data: Partial<FormData>) => void;
  getData: <FieldKey extends keyof FormData>(
    fieldKey: FieldKey
  ) => FormData[FieldKey] | undefined;
  // getMultipleData: <Fields extends ReadonlyArray<keyof FormData>>(
  //   fields: Fields,
  // ) => Pick<FormData, ArrayToUnion<Fields>>;
  getAllData: () => FormData;
  getKeys(): readonly (keyof FormData)[];

  onFieldChange: <FieldKey extends keyof FormData>(
    fieldKey: FieldKey,
    callback: FormOnFieldChangeEventHandler<FormData, FieldKey>
  ) => void;

  onFieldValid: <FieldKey extends keyof FormData>(
    fieldKey: FieldKey,
    callback: FormOnFieldValidEventHandler<FormData, FieldKey>
  ) => void;

  onFieldDirty: <FieldKey extends keyof FormData>(
    fieldKey: FieldKey,
    callback: FormOnFieldDirtyEventHandler<FormData, FieldKey>
  ) => void;

  onFinish: (callback: FormOnFinishEventHandler<FormData>) => void;
  onSubmit: (callback: FormOnSubmitEventHandler<FormData>) => void;
}

export interface FormProps<FormData extends BaseFormData> {
  form: FormRef<FormData>;
  onSubmit?: FormOnSubmitEventHandler<FormData>;
  // onFieldChange?: {
  //   [FieldKey in keyof FormData]: FormOnFieldChangeEventHandler<FormData, FieldKey>;
  // };

  children?: ReactNode;
}
