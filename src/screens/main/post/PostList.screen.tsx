import { View } from "react-native";

import { PostList } from "@components/post";
import { createBottomTabNavigationOptions } from "@helpers/navigation";
import { useTheme } from "@providers";

export const PostListScreenOptions = createBottomTabNavigationOptions({
  tabBarIcon: "NoticeIcon",
  tabBarLabel: "글",
  headerTitle: "글 목록",
});
export type PostListScreenParams = undefined;
export function PostListScreen() {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray.background }}>
      <PostList />
    </View>
  );
}
