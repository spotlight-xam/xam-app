import { View } from "react-native";

import { useTheme } from "@providers";

import { Text } from "../text";

interface ListItemTitleProps {
  title: string;
}
export function ListItemTitle({ title }: ListItemTitleProps) {
  const { colors } = useTheme();

  return (
    <View style={{ paddingTop: 16, paddingBottom: 8, paddingHorizontal: 16 }}>
      <Text
        fontWeight="semiBold"
        fontStyle="small"
        color={colors.gray["accents-4"]}
      >
        {title}
      </Text>
    </View>
  );
}
