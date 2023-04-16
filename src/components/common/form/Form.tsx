import React, { isValidElement, ReactNode, useEffect } from "react";

import { FieldWrapper, FormContext, SubmitButtonWrapper } from "./FormContext";
import { FormStore } from "./FormStore";
import {
  BaseFormData,
  FieldChildComponent,
  SubmitButtonComponent,
  FormOnSubmitEventHandler,
} from "./types";

function isSubmitButton(element: ReactNode): element is SubmitButtonComponent {
  return Boolean(
    isValidElement(element) &&
      typeof element.type !== "string" &&
      element.key &&
      element.key === "submit"
  );
}

function isFieldElement<FormData extends BaseFormData>(
  keys: readonly (keyof FormData)[],
  element: ReactNode
): element is FieldChildComponent {
  return Boolean(
    isValidElement(element) &&
      typeof element.type !== "string" &&
      element.key &&
      typeof element.key === "string" &&
      keys.includes(element.key)
  );
}

function wrapFields<FormData extends BaseFormData>(
  keys: readonly (keyof FormData)[],
  children: ReactNode
): ReactNode {
  return React.Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child;
    }

    if (isSubmitButton(child)) {
      return <SubmitButtonWrapper>{child}</SubmitButtonWrapper>;
    }

    if (isFieldElement(keys, child)) {
      // Logger.log('Form', 'wrapFields', 'FieldWrapper isFieldElement', child.key, child);
      return <FieldWrapper fieldKey={child.key}>{child}</FieldWrapper>;
    }

    const { props } = child;
    // Logger.log('Form', 'wrapFields', 'FieldWrapper check props', { child, props });

    if (Object.keys(props).includes("children")) {
      const wrappedChildren = wrapFields(keys, props.children);

      return React.cloneElement(child, props, wrappedChildren);
    }

    return child;
  });
}

interface InternalFormProps<FormData extends BaseFormData> {
  form: FormStore<FormData>;
  onSubmit?: FormOnSubmitEventHandler<FormData>;
  // onFieldChange?: {
  //   [FieldKey in keyof FormData]: FormOnFieldChangeEventHandler<FormData, FieldKey>;
  // };

  children?: ReactNode;
}

function Form<FormData extends BaseFormData>(
  formProps: InternalFormProps<FormData>
) {
  const { form, onSubmit, children } = formProps;

  const keys = form.getKeys();

  useEffect(() => {
    onSubmit && form.onSubmit(onSubmit);
  }, [onSubmit]);

  return (
    <FormContext.Provider value={form as unknown as FormStore}>
      {wrapFields(keys, children)}
    </FormContext.Provider>
  );
}

export default Form;
