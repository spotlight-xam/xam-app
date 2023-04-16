import React, { forwardRef, useMemo, useState } from "react";
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
import { TextButtonProps, TextButtonStyleProps } from "./button.types";
import { Text } from "../text";

export function useTextButtonStyle(props: TextButtonStyleProps) {
  const { colors } = useTheme();

  const {
    containerStyle: baseContainerStyle,
    stateStyle: baseStateStyle,
    buttonState,
  } = useBaseButtonStyle(props);

  const { baseStyle, stateStyle } = useMemo(() => {
    const baseStyle = StyleSheet.create({
      container: {
        backgroundColor: "transparent",
        width: "auto",
        alignSelf: "center",

        paddingHorizontal: 0,
        height: undefined,
      },
    });

    const stateStyle = {
      text: StyleSheet.create({
        default: {
          color: colors.gray.dark,
        },
        pressed: {
          color: baseStateStyle.color.pressed,
        },
        disabled: {
          color: baseStateStyle.color.disabled,
        },
      }),
    };

    return { baseStyle, stateStyle };
  }, []);

  const containerStyle: StyleProp<ViewStyle> = useMemo(
    () => [baseContainerStyle, baseStyle.container],
    []
  );
  const textStyle = useMemo(() => stateStyle.text[buttonState], [buttonState]);

  return {
    containerStyle,
    textStyle,
  };
}

const TextButton = forwardRef<TouchableWithoutFeedback, TextButtonProps>(
  (
    {
      label,
      inline = true,
      underline,
      style,
      children,
      onPressIn,
      onPressOut,
      color,
      textProps,
      size,
      fontWeight = "semiBold",
      ...props
    },
    ref
  ) => {
    const [pressed, setPressed] = useState(false);

    const { containerStyle, textStyle } = useTextButtonStyle({
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

    const hasUnderline = useMemo(
      () => underline ?? Boolean(color && pressed),
      [color, pressed, underline]
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
          fontStyle={size}
          fontWeight={fontWeight}
          underline={hasUnderline}
          color={color ?? textStyle.color}
          {...textProps}
        >
          {labelText}
        </Text>

        {rightChildren}
      </Touchable>
    );
  }
);

TextButton.displayName = "TextButton";

export default TextButton;
