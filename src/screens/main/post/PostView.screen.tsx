import { View } from "react-native";

import { Text } from "@components/common";
import { createNativeStackNavigationOptions } from "@helpers/navigation";
import { useRoute } from "@hooks/navigation";

export const PostViewScreenOptions = createNativeStackNavigationOptions({
  headerTitle: "공부방",
});
export type PostViewScreenParams = { postId: number };
export function PostViewScreen() {
  const { postId } = useRoute<PostViewScreenParams>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{postId}</Text>
    </View>
  );
}
