import {
  FieldChildComponent,
  SubmitButtonComponent,
  BaseFormData,
} from "./Form.general.types";

export type FieldContextProps<
  FormData extends BaseFormData,
  Field extends keyof FormData,
  ValueName extends string = "value",
  SetterName extends string = "setValue"
> = {
  [key in ValueName]: FormData[Field];
} & {
  [key in SetterName]: (value: FormData[Field]) => void;
};

export interface FieldWrapperProps {
  fieldKey: string | number | symbol;

  children: FieldChildComponent;
}

export interface SubmitButtonWrapperProps {
  children: SubmitButtonComponent;
}

export interface FormContextProps<
  FormData extends BaseFormData = BaseFormData
> {
  formData: FormData;
  getFieldProps: <Field extends keyof FormData>(
    fieldKey: Field
  ) => FieldContextProps<FormData, Field>;
}
