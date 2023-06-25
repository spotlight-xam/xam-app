import { ScrollView } from "react-native";

import { ListItem, ListItemTitle } from "@components/common";
import { createBottomTabNavigationOptions } from "@helpers/navigation";
import { useMainNavigation } from "@hooks/navigation";
import { useGlobalState } from "@hooks/queries/common";
import { useTheme } from "@providers";

export const SettingListScreenOptions = createBottomTabNavigationOptions({
  tabBarIcon: "GearIcon",
  tabBarLabel: "설정",
  headerTitle: "설정",
});
export type SettingListScreenParams = undefined;
export function SettingListScreen() {
  const navigation = useMainNavigation();
  const { colors } = useTheme();

  const [, setAccessToken] = useGlobalState<string>(["accessToken"], "");
  const [, setRefreshToken] = useGlobalState<string>(["refreshToken"], "");

  return (
    <ScrollView
      style={{ backgroundColor: colors.gray["accents-1"] }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <ListItemTitle title="계정 설정" />
      <ListItem
        icon="ExitIcon"
        title="로그아웃"
        onPress={() => {
          setAccessToken("");
          setRefreshToken("");
        }}
      />

      <ListItemTitle title="개발자 옵션" />
      <ListItem
        title="Test Screen"
        onPress={() => navigation.navigate("TestHomeScreen")}
      />
    </ScrollView>
  );
}
