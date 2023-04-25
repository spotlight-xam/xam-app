import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "@components/common";
import { createBottomTabNavigationOptions } from "@helpers/navigation";
import { useMainNavigation } from "@hooks/navigation";

export const MessageRoomListScreenOptions = createBottomTabNavigationOptions({
  tabBarIcon: "MessageIcon",
  tabBarLabel: "채팅",
  headerTitle: "Xam",
});
export type MessageRoomListScreenParams = undefined;
export function MessageRoomListScreen() {
  const navigation = useMainNavigation();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      edges={["bottom", "left", "right"]}
    >
      <Button
        label="채팅방으로 이동"
        onPress={() => navigation.navigate("MessageListScreen")}
      />
    </SafeAreaView>
  );
}
