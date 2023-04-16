import { forwardRef, useMemo, useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  ViewStyle,
} from "react-native";

import { useTheme } from "@providers";

import {
  parseButtonChildren,
  parseButtonLabel,
  useBaseButtonStyle,
} from "./BaseButton";
import Touchable from "./Touchable";
import { SolidButtonProps, SolidButtonStyleProps } from "./button.types";
import { Text } from "../text";

export function useSolidButtonStyle(props: SolidButtonStyleProps) {
  const {
    containerStyle: baseContainerStyle,
    stateStyle: baseStateStyle,
    buttonState,
  } = useBaseButtonStyle(props);

  const { stateStyle } = useMemo(() => {
    const stateStyle = {
      container: StyleSheet.create({
        default: {
          backgroundColor: baseStateStyle.color.default,
        },
        pressed: {
          backgroundColor: baseStateStyle.color.pressed,
        },
        disabled: {
          backgroundColor: baseStateStyle.color.disabled,
        },
      }),
    };

    return { stateStyle };
  }, []);

  const containerStyle: StyleProp<ViewStyle> = useMemo(
    () => [baseContainerStyle, stateStyle.container[buttonState]],
    [buttonState]
  );

  return {
    containerStyle,
  };
}

const SolidButton = forwardRef<TouchableWithoutFeedback, SolidButtonProps>(
  (
    {
      label,
      size,
      inline,
      textProps,
      style,
      children,
      onPressIn,
      onPressOut,
      ...props
    },
    ref
  ) => {
    const { colors } = useTheme();

    const [pressed, setPressed] = useState(false);

    const { containerStyle } = useSolidButtonStyle({
      pressed,
      disabled: props.disabled,
      size,
      inline,
    });

    const labelText = useMemo(
      () => parseButtonLabel(label, children),
      [label, children]
    );

    const [leftChildren, rightChildren] = useMemo(
      () => parseButtonChildren(children),
      [children]
    );

    return (
      <Touchable
        {...props}
        pressed={pressed}
        setPressed={setPressed}
        style={[containerStyle, style]}
        ref={ref}
      >
        {leftChildren}

        <Text
          fontWeight="semiBold"
          fontStyle={size === "large" ? "default" : size}
          color={colors.white}
          {...textProps}
        >
          {labelText}
        </Text>

        {rightChildren}
      </Touchable>
    );
  }
);

SolidButton.displayName = "SolidButton";

export default SolidButton;
