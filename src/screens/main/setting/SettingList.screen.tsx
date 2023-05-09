import { ScrollView } from "react-native";

import { ListItem, ListItemTitle, Text } from "@components/common";
import { createBottomTabNavigationOptions } from "@helpers/navigation";
import { useTheme } from "@providers";

export const SettingListScreenOptions = createBottomTabNavigationOptions({
  tabBarIcon: "GearIcon",
  tabBarLabel: "설정",
  headerTitle: "설정",
});
export type SettingListScreenParams = undefined;
export function SettingListScreen() {
  const { colors, mode, setMode } = useTheme();

  return (
    <ScrollView
      style={{ backgroundColor: colors.gray["accents-1"] }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <ListItemTitle title="계정 설정" />
      <ListItem icon="ExitIcon" title="로그아웃" onPress={() => {}} />

      <ListItem
        title="mode"
        onPress={() => setMode(mode === "dark" ? "light" : "dark")}
        rightComponent={<Text>{mode}</Text>}
      />
    </ScrollView>
  );
}
