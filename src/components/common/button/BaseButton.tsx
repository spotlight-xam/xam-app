import { Children, isValidElement, useMemo } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

import { useTheme } from "@providers";

import { BaseButtonStyleProps } from "./button.types";

export function useBaseButtonStyle({
  size = "default",
  disabled,
  pressed,
  inline,
}: BaseButtonStyleProps): {
  containerStyle: StyleProp<ViewStyle>;
  stateStyle: {
    color: { disabled: string; pressed: string; default: string };
  };
  buttonState: "default" | "pressed" | "disabled";
} {
  const { colors, borderRadius } = useTheme();

  const buttonState = useMemo(
    () => (disabled ? "disabled" : pressed ? "pressed" : "default"),
    [disabled, pressed]
  );

  const { baseStyle, sizeStyle, stateStyle } = useMemo(() => {
    const baseStyle = StyleSheet.create({
      container: {
        width: "100%",

        borderRadius,

        justifyContent: "center",
        alignItems: "center",

        paddingHorizontal: 16,
        flexDirection: "row",
      },
    });

    const sizeStyle = {
      container: StyleSheet.create({
        default: { height: 32 },
        large: { height: 40 },
        small: { height: 24 },
      }),
    };

    const stateStyle = {
      color: {
        disabled: colors.gray.bright1,
        pressed: colors.primary.dark,
        default: colors.primary.origin,
      },
    };

    return { baseStyle, sizeStyle, stateStyle };
  }, []);

  const containerStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      baseStyle.container,
      sizeStyle.container[size],
      inline && {
        width: "auto",
        // alignSelf: inline === true ? 'flex-start' : inline,
      },
    ],
    [baseStyle, sizeStyle, size, inline]
  );

  return {
    containerStyle,
    stateStyle,
    buttonState,
  };
}

export const parseButtonLabel = (
  label?: string,
  children?: React.ReactNode
) => {
  if (label) {
    return label;
  }

  if (children) {
    if (typeof children === "string") {
      return children;
    } else if (children instanceof Array) {
      const labelChild = children.find((child) => typeof child === "string");

      if (labelChild) {
        return labelChild;
      }
    }
  }

  return "";
  // throw new Error('Button must have either a label or children');
};

export const parseButtonChildren = (children?: React.ReactNode) => {
  const childrenLeft: React.ReactElement[] = [];
  const childrenRight: React.ReactElement[] = [];
  let findLabelInChild = false;

  Children.forEach(children, (child, index) => {
    if (typeof child === "string") {
      findLabelInChild = true;
      return;
    }

    if (!isValidElement(child)) {
      return;
    }

    if (findLabelInChild) {
      childrenLeft.push(child);
    } else {
      childrenRight.push(child);
    }
  });

  return [childrenLeft, childrenRight];
};
