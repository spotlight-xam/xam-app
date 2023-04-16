import { forwardRef, useMemo } from "react";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";

import { useLoadableCallback } from "@hooks/util";

import BorderedButton from "./BorderedButton";
import SolidButton from "./SolidButton";
import TextButton from "./TextButton";
import {
  ButtonProps,
  SolidButtonProps,
  BorderedButtonProps,
  TextButtonProps,
} from "./button.types";
/**
 * @todo isValid를 true, false 이외에도 아직 validation이 되지 않은 상태인 undefined를 지원하도록 하기
 * @todo 버튼의 logic 통합
 * @todo 버튼이 눌린 상태를 유지할 수 있도록 수정
 *   - `useLiftedState` 등으로 버튼의 상태를 조작할 수 있도록 만들면 될듯
 * @todo disabled 상태를 따로 가지고 있어야 할듯
 *   - clicked이면서 disabled인 상황이 있을 수 있음(내가 누른 항목을 확인할 수 있지만 수정은 불가능할 때)
 */
const Button = forwardRef<
  TouchableWithoutFeedback | TouchableOpacity,
  ButtonProps
>(({ type = "solid", loadable, ...props }, ref) => {
  const lodableOnPress = useLoadableCallback(
    props.onPress ? props.onPress : () => {},
    [props.onPress]
  );

  props.onPress = useMemo(() => {
    if (loadable) {
      return lodableOnPress;
    } else {
      return props.onPress;
    }
  }, [loadable, props.onPress, lodableOnPress]);

  if (type === "text") {
    return <TextButton {...(props as TextButtonProps)} ref={ref} />;
  } else if (type === "bordered") {
    return <BorderedButton {...(props as BorderedButtonProps)} ref={ref} />;
  } else {
    return <SolidButton {...(props as SolidButtonProps)} ref={ref} />;
  }
});

Button.displayName = "Button";

export default Button;
