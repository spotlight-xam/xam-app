import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@components/common";
import { createNativeStackNavigationOptions } from "@helpers/navigation";

export const MessageListScreenOptions = createNativeStackNavigationOptions({
  headerTitle: "공부방",
});
export type MessageListScreenParams = { messageRoomId: number };
export function MessageListScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      edges={["bottom", "left", "right"]}
    >
      <Text>채팅</Text>
    </SafeAreaView>
  );
}
