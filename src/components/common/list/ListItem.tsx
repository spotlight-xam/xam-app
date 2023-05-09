import { View } from "react-native";

import { IconUnion, Icon } from "../icon";
import { Pressable } from "../pressable";
import { Text } from "../text";

type ListItemProps = {
  title: string;
  onPress?: () => void;
  icon?: IconUnion;
  rightComponent?: React.ReactNode | (() => React.ReactNode);
  color?: string;
};
export function ListItem({
  onPress,
  icon,
  color,
  title,
  rightComponent,
}: ListItemProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={{
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {icon && (
          <Icon
            color={color}
            style={{ marginRight: 16 }}
            size={24}
            name={icon}
          />
        )}
        <Text color={color}>{title}</Text>
      </View>
      <View>{rightComponent && <>{rightComponent}</>}</View>
    </Pressable>
  );
}
