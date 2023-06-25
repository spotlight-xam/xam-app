import { View } from "react-native";

import { MessageRoomList } from "@components/messageRoom";
import { createBottomTabNavigationOptions } from "@helpers/navigation";
import { useTheme } from "@providers";

export const MessageRoomListScreenOptions = createBottomTabNavigationOptions({
  tabBarIcon: "MessageIcon",
  tabBarLabel: "채팅",
  headerTitle: "채팅 목록",
});
export type MessageRoomListScreenParams = undefined;
export function MessageRoomListScreen() {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray.background }}>
      <MessageRoomList />
    </View>
  );
}
