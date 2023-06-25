import { View } from "react-native";

import { MemberList } from "@components/member";
import { createBottomTabNavigationOptions } from "@helpers/navigation";
import { useTheme } from "@providers";

export const MemberListScreenOptions = createBottomTabNavigationOptions({
  tabBarIcon: "AddressIcon",
  tabBarLabel: "멤버",
  headerTitle: "멤버 목록",
});
export type MemberListScreenParams = undefined;
export function MemberListScreen() {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.gray.background }}>
      <MemberList />
    </View>
  );
}
