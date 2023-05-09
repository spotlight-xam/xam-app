import React, { Children, useMemo } from "react";
import {
  ColorValue,
  Text as _Text,
  TextProps as _TextProps,
} from "react-native";

import {
  FontStyleUnion,
  FontWeightUnion,
  fontStyles,
  fontWeights,
} from "@constants";
import { useTheme } from "@providers";

export interface TextProps extends _TextProps {
  fixed?: boolean;
  color?: ColorValue;
  underline?: boolean;
  enableNormalize?: boolean;

  /**
   * @default 'medium'
   * @description
   * - thin: 250(~Thin)
   * - light: 300(~Light)
   * - medium: 400(~Regular)
   * - semiBold: 500(~Medium)
   * - bold: 700(~Bold)
   */
  fontWeight?: FontWeightUnion;

  /**
   * @default 'default'
   * @description
   * - mini: 10
   * - xSmall: 11
   * - small: 12
   * - default: 14
   * - large: 16
   * - xLarge: 17
   * - h3: 20
   * - h2: 24
   * - h1: 30
   */
  fontStyle?: FontStyleUnion;
}

export function Text({
  fixed = true,
  children,
  underline,
  style,
  enableNormalize,
  color,
  fontStyle = "default",
  fontWeight = "medium",
  ...props
}: TextProps) {
  const { colors } = useTheme();

  const textStyle = useMemo(() => {
    const fontSize = fontStyles[fontStyle];
    return [{ fontSize }, { fontFamily: fontWeights[fontWeight] }];
  }, [fontStyle, fontWeight]);

  const normalizedChildren = useMemo(
    () =>
      enableNormalize
        ? Children.toArray(children).map((child) => {
            if (typeof child === "string") {
              return child.normalize("NFC");
            } else {
              return child;
            }
          })
        : children,
    [children, enableNormalize]
  );

  return (
    <_Text
      {...props}
      style={[
        textStyle,
        { color: color || colors.gray["accents-8"] },
        style,
        underline && { textDecorationLine: "underline" },
      ]}
      allowFontScaling={!fixed}
    >
      {normalizedChildren}
    </_Text>
  );
}
