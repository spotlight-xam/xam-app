import { TouchableWithoutFeedbackProps } from "react-native";

import { FontWeightUnion } from "@constants";

import { TextProps } from "../text";

export const ButtonSizeUnionList = ["small", "default", "large"] as const;
export type ButtonSizeUnion = (typeof ButtonSizeUnionList)[number];

export interface BaseButtonProps
  extends Omit<TouchableWithoutFeedbackProps, "children">,
    Partial<Record<ButtonSizeUnion, boolean>> {
  label?: string;
  /**
   * @summary label이 있으면 무시됨
   */
  children?: React.ReactNode;

  /**
   * @description 버튼이 이전 onPress를 기다릴지 여부
   * - true: 이전 onPress 함수가 끝나기 전에 버튼을 누르면 무시됨
   * - false: 이전 onPress 함수를 기다리지 않고 다음 입력이 들어오면 바로 onPress 함수 실행
   */
  loadable?: boolean;

  disabled?: boolean;
  /**
   * @summary Button 컴포넌트의 크기
   * @default "default"
   *
   * @description
   * - "default" : 32dp height
   * - "large" : 40dp height
   * - "small" : 24dp height
   */
  size?: ButtonSizeUnion;

  /**
   * @summary 버튼이 가로를 채우는지 여부
   * @default false
   */
  inline?: boolean;

  textProps?: TextProps;
}

export interface SolidButtonProps extends BaseButtonProps {}

export interface BorderedButtonProps extends BaseButtonProps {
  /**
   * @summary Button 컴포넌트가 input 내부에 inline으로 들어갈 때
   *
   * @description
   * - input의 size에 따라 버튼의 size가 자동으로 변경될 예정입니다.
   *   - inputSize "small": X
   *   - inputSize "default": small
   *   - inputSize "large": default
   */
  inlineEdit?: boolean;
}

export interface TextButtonProps extends BaseButtonProps {
  fontWeight?: FontWeightUnion;
  color?: string;

  /**
   * @summary TextButton일 때 텍스트의 밑줄 여부
   *
   * @description
   * - type='text'일 때만 적용됩니다.
   * - `true`: 항상 밑줄 표시
   * - `false`: 항상 밑줄 제거
   * - `undefined`: 밑줄 표시/제거 여부는 컴포넌트 상태에 따라 변경됩니다.
   *   - 컴포넌트 상태가 `pressed`(clicked)일 때만 밑줄 표시
   */
  underline?: boolean;

  /**
   * @default true
   */
  inline?: boolean;
}

export const ButtonTypeUnionList = ["solid", "bordered", "text"] as const;
export type ButtonTypeUnion = (typeof ButtonTypeUnionList)[number];

export type ButtonProps = {
  /**
   * @summary Button 컴포넌트의 스타일
   * @default "solid"
   *
   * @description
   * - "solid" : 배경색이 있는 스타일
   * - 'bordered' : border(outline)만 있는 스타일
   * - 'text' : 텍스트만 있는 스타일
   *   - inline으로 아이콘을 넣을 수도 있음
   *
   * @example
   * ```typescriptreact
   *  <Button label='solid default' style={{ marginTop: 8 }} />
   *
   *  <Button label='solid small' size='small' style={{ marginTop: 8 }} />
   *
   *  <Button label='solid large' size='large' style={{ marginTop: 8 }} />
   *
   *  <Button label='solid disabled' disabled style={{ marginTop: 8 }} />
   *
   *  <Button label='bordered default' type='bordered' style={{ marginTop: 8 }} />
   *
   *  <Button label='bordered small' type='bordered' size='small' style={{ marginTop: 8 }} />
   *
   *  <Button label='bordered large' type='bordered' size='large' style={{ marginTop: 8 }} />
   *
   *  <Button label='bordered disabled' type='bordered' disabled style={{ marginTop: 8 }} />
   *
   *  <Button label='text default' type='text' style={{ marginTop: 8 }} />
   *
   *  <Button label='text small' type='text' size='small' style={{ marginTop: 8 }} />
   *
   *  <Button label='text large' type='text' size='large' style={{ marginTop: 8 }} />
   *
   *  <Button label='text disabled' type='text' disabled style={{ marginTop: 8 }} />
   *
   *  <Button
   *    label='text colored'
   *    type='text'
   *    textProps={{ color: theme.colors.others.blue.origin }}
   *    style={{ marginTop: 8 }}
   *  />
   *
   *  <Button label='text underline' type='text' underline style={{ marginTop: 8 }} />
   *
   *  <Button label='로그인' type='solid' disabled style={{ marginTop: 8 }} />
   *
   *  <Button type='icon' name='Search' style={{ marginTop: 8, padding: 4 }} />
   *
   *  <Button type='text' style={{ marginTop: 8 }}>
   *    <Icon name='Search' style={{ paddingRight: 16 }} />
   *    <Icon name='Search' style={{ paddingRight: 16 }} />
   *    검색하기
   *    <Icon name='Search' style={{ paddingLeft: 16 }} />
   *  </Button>
   * ```
   */
  type?: ButtonTypeUnion;
} & (
  | ({ type?: undefined } & SolidButtonProps)
  | ({ type: "solid" } & SolidButtonProps)
  | ({ type: "bordered" } & BorderedButtonProps)
  | ({ type: "text" } & TextButtonProps)
);

export interface BaseButtonStyleProps
  extends Pick<BaseButtonProps, "size" | "disabled" | "inline"> {
  pressed: boolean;
}

export type SolidButtonStyleProps = BaseButtonStyleProps;

export interface BorderedButtonStyleProps
  extends BaseButtonStyleProps,
    Pick<BorderedButtonProps, "inlineEdit"> {}

export interface TextButtonStyleProps
  extends BaseButtonStyleProps,
    Pick<TextProps, "color"> {}
