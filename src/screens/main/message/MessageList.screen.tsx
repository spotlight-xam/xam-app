import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "@components/common";
import { createNativeStackNavigationOptions } from "@helpers/navigation";
import { useMainNavigation } from "@hooks/navigation";

export const MessageListScreenOptions = createNativeStackNavigationOptions({
  headerTitle: "공부방",
});
export type MessageListScreenParams = undefined;
export function MessageListScreen() {
  const navigation = useMainNavigation();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      edges={["bottom", "left", "right"]}
    >
      <Button
        label="뒤로가기"
        onPress={() =>
          navigation.navigate("MainDrawerNavigation", {
            screen: "MainTabNavigation",
            params: { screen: "MessageRoomListScreen" },
          })
        }
      />
    </SafeAreaView>
  );
}
