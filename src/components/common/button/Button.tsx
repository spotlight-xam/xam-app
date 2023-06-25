import { View, ViewStyle } from "react-native";

import { useTheme } from "@providers";

import { Icon, IconUnion } from "../icon";
import { Pressable } from "../pressable";
import { Text } from "../text";

export type ButtonProps = {
  onPress?: () => void;
  size?: "small" | "large";
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  align?: "start" | "grow";
  style?: ViewStyle;
} & (
  | { children: string; icon?: undefined }
  | { children?: undefined; icon: IconUnion; shape?: "circle" | "square" }
);
export function Button(props: ButtonProps) {
  const { children, onPress, size, icon, prefix, suffix, align, style } = props;

  const { colors, borderRadius } = useTheme();

  const height = { small: 32, default: 40, large: 48 }[size || "default"];
  const fontStyle = (
    { small: "default", default: "default", large: "large" } as const
  )[size || "default"];

  const iconSize = { small: 16, default: 20, large: 24 }[size || "default"];

  const iconProps = { size: iconSize, color: colors.gray.background };

  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          height,
          width: icon ? height : undefined,
          borderRadius:
            icon && props.shape === "circle" ? height : borderRadius,
        },
        style,
      ]}
    >
      <View
        style={{
          borderRadius:
            icon && props.shape === "circle" ? height : borderRadius,
          backgroundColor: colors.primary.origin,
          paddingHorizontal: icon ? undefined : 12,
          flexDirection: "row",
          justifyContent:
            (align || "grow") === "grow" ? "center" : `flex-start`,
          alignItems: "center",
          flex: 1,
        }}
      >
        {prefix && (
          <View style={{ marginRight: 8 }}>
            {prefix.type === Icon
              ? { ...prefix, props: { ...prefix.props, ...iconProps } }
              : prefix}
          </View>
        )}

        {icon ? (
          <Icon {...iconProps} name={icon} />
        ) : (
          <Text
            style={{
              flexGrow: align ? 1 : undefined,
              textAlign: align === "grow" ? "center" : undefined,
            }}
            color={colors.gray.background}
            fontWeight="semiBold"
            fontStyle={fontStyle}
          >
            {children}
          </Text>
        )}
        {suffix && (
          <View style={{ marginLeft: 8 }}>
            {suffix.type === Icon
              ? { ...suffix, props: { ...suffix.props, ...iconProps } }
              : suffix}
          </View>
        )}
      </View>
    </Pressable>
  );
}
