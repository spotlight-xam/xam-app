import {
  Dispatch,
  JSXElementConstructor,
  ReactElement,
  RefObject,
  SetStateAction,
} from "react";
import { GestureResponderEvent } from "react-native";

/**
 * @description
 * - string: input, select, textarea, radio type button
 * - number: slider
 * - boolean: checkbox
 * - null | undefined: 비어있는 상태와 기본값을 구별하는 경우
 *   - ''은 string의 초기값이자 비어있는 상태라 둘을 구별해야하는 상황에서 필요함
 */
export type FieldValuable = any;
export type BaseFormData = {
  [FieldKey: string | number | symbol]: FieldValuable;
};

export interface FieldRef {
  isFocused?: () => boolean;
  focus?: () => void;
  blur?: () => void;
  clear?: () => void;
}

export interface FieldChildProps<
  FieldValue extends FieldValuable = FieldValuable
> {
  value?: FieldValue;
  setValue?: Dispatch<SetStateAction<FieldValue>>;
  isValid?: boolean | undefined;
  setIsValid?: Dispatch<SetStateAction<boolean | undefined>>;
  ref?: RefObject<{
    isFocused?: () => boolean;
    focus?: () => void;
    blur?: () => void;
    clear?: () => void;
  }>;
}

/**
 * @todo ReactPortal에 대해 더 찾아보고 문제없는지 확인하기
 */
export type FieldChildComponent =
  | ReactElement<any, JSXElementConstructor<any>> & {
      key: string;
    };

export type SubmitButtonComponent = React.ReactElement<{
  onPress?: (e: GestureResponderEvent) => void;
  disabled?: boolean;
}> & {
  key: string;
};

export interface FieldOption<T extends FieldValuable> {
  /**
   * @summary 선택지의 초기값
   */
  initialValue: T;

  /**
   * @summary 컴포넌트의 lifted value state prop 이름
   * @default 'value'
   */
  statePropName?: string;

  /**
   * @summary 컴포넌트의 lifted value state setter prop 이름
   * @default 'setValue'
   */
  setterPropName?: string;

  /**
   * @summary 선택지가 form에서 필수 입력값인지 여부
   * @default false
   */
  required?: boolean;

  /**
   * @summary 컴포넌트의 lifted isValid state prop 이름
   * @default 'validator'
   */
  validatorPropName?: string;

  /**
   * @summary 컴포넌트의 lifted isValid state prop 이름
   * @default 'isValid'
   */
  validStatePropName?: string;

  /**
   * @summary 컴포넌트의 lifted isValid state setter prop 이름
   * @default 'setIsValid'
   */
  validSetterPropName?: string;

  /**
   * @summary 값이 invalid한 경우 전달될 props
   * @default { errorMessage: '필수 입력 항목입니다'}
   */
  onInvalidProps?: object;
}

export type FormOption<FormData extends BaseFormData = BaseFormData> = {
  [Field in keyof FormData]: FieldOption<FormData[Field]>;
};

export const FieldEventUnionList = [
  "onFieldChange",
  "onFieldValid",
  "onFieldDirty",
] as const;
export const FormEventUnionList = ["onFinish", "onSubmit"] as const;
export type FieldEventUnion = (typeof FieldEventUnionList)[number];
export type FormEventUnion = (typeof FormEventUnionList)[number];

export interface FormSupportableProps<T> {
  value?: T;
  setValue?: Dispatch<T>;
  /**
   * TODO: supprot undefined state(not validated yet)
   */
  isValid?: boolean | undefined;
  setIsValid?: Dispatch<boolean | undefined>;
  validator?: (value: T) => boolean;
}
