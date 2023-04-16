import { View, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

import * as IconList from "@assets/svg";
import { useTheme } from "@providers";

export type IconUnion = keyof typeof IconList;

export interface SvgIconProps extends SvgProps {
  filled?: boolean;
}

export interface IconProps extends SvgIconProps {
  name: IconUnion;

  /**
   * @summary 아이콘 사이즈
   *
   * @description 아이콘의 width와 height값을 이 값으로 설정합니다.
   */
  size?: number;
  style?: ViewStyle;
}

export function Icon(props: IconProps) {
  const { colors } = useTheme();

  const { name, size, style, color, ...rest } = props;

  const Component = IconList[name];

  const iconSize = size ? { width: size, height: size } : {};

  return (
    <View style={style}>
      <Component {...rest} color={color ?? colors.gray.dark} {...iconSize} />
    </View>
  );
}
