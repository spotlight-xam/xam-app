import { TouchableOpacity, View } from "react-native";

import {
  Icon,
  IconProps,
  IconUnion,
  Text,
  TextProps,
} from "@components/common";
import { MainStackNavigationProps } from "@navigation/main";

export type RightButton = {
  onPress?: (navigation: MainStackNavigationProps) => void;
  anchorRef?: React.RefObject<TouchableOpacity>;
} & (
  | { icon: IconUnion; iconProps?: Partial<IconProps> }
  | { label: string; labelProps?: Partial<TextProps> }
);

interface NavigationOptionRightButtonsProps {
  navigation: MainStackNavigationProps;
  rightButtons?: RightButton[];
  paddingRight?: number;
}
export function NavigationOptionRightButtons({
  navigation,
  rightButtons,
  paddingRight,
}: NavigationOptionRightButtonsProps) {
  return rightButtons
    ? () => (
        <View style={{ flexDirection: "row", paddingRight }}>
          {rightButtons.map((rightButton, index) =>
            "icon" in rightButton ? (
              <TouchableOpacity
                key={index}
                ref={rightButton.anchorRef}
                disabled={!rightButton.onPress}
                onPress={() =>
                  rightButton.onPress && rightButton.onPress(navigation)
                }
                style={{
                  width: 32,
                  height: 44,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginLeft: index ? 4 : 0,
                }}
              >
                <Icon
                  size={24}
                  name={rightButton.icon}
                  {...rightButton.iconProps}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                key={index}
                ref={rightButton.anchorRef}
                disabled={!rightButton.onPress}
                onPress={() =>
                  rightButton.onPress && rightButton.onPress(navigation)
                }
              >
                <Text {...rightButton.labelProps}>{rightButton.label}</Text>
              </TouchableOpacity>
            )
          )}
        </View>
      )
    : undefined;
}
