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
import { BorderedButtonProps, BorderedButtonStyleProps } from "./button.types";
import { Text } from "../text";

export function useBorderedButtonStyle(props: BorderedButtonStyleProps) {
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
        borderWidth: 1,
      },
    });

    const stateStyle = {
      container: StyleSheet.create({
        default: {
          borderColor: baseStateStyle.color.default,
        },
        pressed: {
          borderColor: baseStateStyle.color.pressed,
        },
        disabled: {
          borderColor: baseStateStyle.color.disabled,
        },
        inlineEdit: {
          borderColor: colors.gray.dark,
        },
      }),

      text: StyleSheet.create({
        default: {
          color: baseStateStyle.color.default,
        },
        pressed: {
          color: baseStateStyle.color.pressed,
        },
        disabled: {
          color: baseStateStyle.color.disabled,
        },
        inlineEdit: {
          color: colors.gray.dark,
        },
      }),
    };

    return { baseStyle, stateStyle };
  }, []);

  const containerStyle: StyleProp<ViewStyle> = useMemo(
    () => [
      baseContainerStyle,
      baseStyle.container,
      stateStyle.container[buttonState],
    ],
    [buttonState]
  );
  const textStyle = useMemo(() => stateStyle.text[buttonState], [buttonState]);

  return {
    containerStyle,
    textStyle,
  };
}

const BorderedButton = forwardRef<
  TouchableWithoutFeedback,
  BorderedButtonProps
>(
  (
    { label, size, inline, textProps, style, inlineEdit, children, ...props },
    ref
  ) => {
    const [pressed, setPressed] = useState(false);

    const { containerStyle, textStyle } = useBorderedButtonStyle({
      pressed,
      disabled: props.disabled,
      size,
      inline,
      inlineEdit,
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
          color={textStyle.color}
          {...textProps}
        >
          {labelText}
        </Text>

        {rightChildren}
      </Touchable>
    );
  }
);

BorderedButton.displayName = "BorderedButton";

export default BorderedButton;
