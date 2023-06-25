import { ScrollView } from "react-native";

import { useGetPostList } from "@hooks/queries/post";

import { PostListItem } from "./PostListItem";

export function PostList() {
  const { data: postList } = useGetPostList();

  return (
    <ScrollView>
      {postList?.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </ScrollView>
  );
}
