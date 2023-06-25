import { View } from "react-native";

import { GroupInfoCard } from "@components/group";
import { createBottomTabNavigationOptions } from "@helpers/navigation";
import { useSelectedGroup } from "@hooks/group";
import { useEffectStackNavigationOptions } from "@hooks/navigation";

export const HomeScreenOptions = createBottomTabNavigationOptions({
  tabBarIcon: "HomeIcon",
  tabBarLabel: "홈",
  headerTitle: "Xam",
});
export type HomeScreenParams = undefined;
export function HomeScreen() {
  const group = useSelectedGroup();

  useEffectStackNavigationOptions(
    (setOptions) => setOptions({ headerTitle: group?.name || "홈" }),
    [group]
  );

  return (
    <View style={{ padding: 16 }}>
      <GroupInfoCard />
    </View>
  );
}
