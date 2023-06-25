import dayjs from "dayjs";
import { TouchableOpacity, View } from "react-native";

import { Text } from "@components/common";
import { useMainNavigation } from "@hooks/navigation";
import { PostEntity } from "@hooks/queries/post";

interface PostListItemProps {
  post: PostEntity;
}
export function PostListItem({ post }: PostListItemProps) {
  const navigation = useMainNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PostViewScreen", { postId: post.id })}
      style={{
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text fontStyle="large" fontWeight="semiBold">
          {post.title}
        </Text>
        <Text>{post.writer.name}</Text>
      </View>

      <Text>{dayjs(post.createdAt).format("YYYY.MM.DD")}</Text>
    </TouchableOpacity>
  );
}
