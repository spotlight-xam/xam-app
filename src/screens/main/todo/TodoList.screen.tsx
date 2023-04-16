import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@components/common";
import { createBottomTabNavigationOptions } from "@helpers/navigation";

export const TodoListScreenOptions = createBottomTabNavigationOptions({
  tabBarIcon: "AddressIcon",
  tabBarLabel: "할 일",
  headerTitle: "할 일",
});
export type TodoListScreenParams = undefined;
export function TodoListScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom", "left", "right"]}>
      <Text>todo</Text>
    </SafeAreaView>
  );
}
