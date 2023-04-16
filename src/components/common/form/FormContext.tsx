import {
  cloneElement,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  createContext,
  useContext,
  useLayoutEffect,
} from "react";
import { GestureResponderEvent } from "react-native";

import {
  FieldValuable,
  FieldWrapperProps,
  SubmitButtonWrapperProps,
  IFormStore,
  FieldRef,
} from "./types";

export const FormContext = createContext<IFormStore>({
  initializeEventListeners: (): any => {},
  registerFormEventListener: (): any => {},
  unregisterFormEventListener: (): any => {},
  notifyFormEvent: (): any => {},
  registerFieldEventListener: (): any => {},
  unregisterFieldEventListener: (): any => {},
  notifyFieldEvent: (): any => {},
  deleteField: (): any => {},
  registerOrUpdateField: (): any => {},
  unregisterField: (): any => {},
  getFormData: (): any => {},
  getFieldData: (): any => {},
  getFieldOption: (): any => {},
  registerOrUpdateFormState: (): any => {},
  isFinished: (): any => {},
});

export function useFormContext() {
  return useContext(FormContext);
}

/**
 * @todo Add validation
 * @todo Add required option support
 *
 * FIXME boolean type cause Cannot update a component warning
 * https://github.com/facebook/react/issues/18178#issuecomment-595846312
 */
export function FieldWrapper<T = any>({
  fieldKey,
  children,
}: FieldWrapperProps) {
  const formStore = useFormContext();

  const {
    initialValue,
    statePropName = "value",
    setterPropName = "setValue",
    required = false,
    validatorPropName = "validator",
    validStatePropName = "isValid",
    validSetterPropName = "setIsValid",
    onInvalidProps = {
      errorMessage: required
        ? "필수 입력 항목입니다."
        : "입력이 잘못되었습니다.",
    },
  } = formStore.getFieldOption(fieldKey);

  const {
    [validatorPropName]: validator = () => undefined,
    ref,
    ...rest
  } = children.props;

  const [isValid, setIsValid] = useState<boolean>();
  const [value, setValueRaw] = useState<T>(initialValue);
  const internalRef = useRef<FieldRef>(null);

  useImperativeHandle(ref, () => internalRef.current, [ref]);

  const setValue = useCallback<Dispatch<SetStateAction<FieldValuable>>>(
    (value) => {
      formStore.initializeEventListeners(fieldKey);

      setValueRaw((prevState) => {
        const computedState =
          typeof value === "function" ? value(prevState) : value;

        formStore.notifyFieldEvent(fieldKey, "onFieldChange", computedState);

        return computedState;
      });
    },
    [formStore]
  );

  useEffect(() => {
    formStore.registerOrUpdateField(fieldKey, {
      value,
      setValue,
      isValid,
      setIsValid,
      ref: internalRef,
    });

    // return () => formStore.unregisterField(fieldKey);
  }, [formStore, fieldKey, value, setValue, isValid]);

  const fieldProps: typeof children.props = {
    ...(isValid ? {} : onInvalidProps),
    ...rest,
    [statePropName]: value,
    [setterPropName]: setValue,
    [validStatePropName]: isValid,
    [validSetterPropName]: setIsValid,
    [validatorPropName]: (value: FieldValuable) => {
      const validatorResult = validator(value);
      return Boolean(
        (!required || value) &&
          (validatorResult === undefined || validatorResult)
      );
    },
    ...(typeof children.type === "function" ? {} : { ref: internalRef }),
  };

  return cloneElement(children, fieldProps);
}

export function SubmitButtonWrapper({ children }: SubmitButtonWrapperProps) {
  const formStore = useFormContext();

  const [isSubmittable, setIsSubmittable] = useState(false);

  useLayoutEffect(() => {
    formStore.registerOrUpdateFormState(isSubmittable, setIsSubmittable);
  }, [formStore, isSubmittable]);

  const { onPress, ...rest } = children.props;

  return cloneElement(children, {
    ...rest,
    onPress: (e: GestureResponderEvent) => {
      onPress && onPress(e);
      formStore.notifyFormEvent("onSubmit");
    },
    disabled: !isSubmittable || rest.disabled,
  });
}
