import { View } from "react-native";

import { Text } from "@components/common";
import { createBottomTabNavigationOptions } from "@helpers/navigation";

export const PostListScreenOptions = createBottomTabNavigationOptions({
  tabBarIcon: "NoticeIcon",
  tabBarLabel: "글",
  headerTitle: "Xam",
});
export type PostListScreenParams = undefined;
export function PostListScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>글 리스트!</Text>
    </View>
  );
}
