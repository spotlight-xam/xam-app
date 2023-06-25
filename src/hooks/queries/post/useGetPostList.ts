import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

import { UserEntity } from "../user";

export interface PostEntity {
  id: number;
  title: string;
  content: string;
  writer: UserEntity;
  createdAt: string;
}
export function useGetPostList() {
  return useQuery<PostEntity[]>(["getPostList"], () => {
    return [
      {
        id: 0,
        title: "테스트 글",
        content: "내용..",
        writer: {
          id: 10,
          name: "오준서",
          profileImage:
            "https://avatars.githubusercontent.com/u/40460655?s=96&v=4",
        },
        createdAt: dayjs().toString(),
      },
      {
        id: 1,
        title: "안녕하세요.",
        content: "내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
        writer: {
          id: 10,
          name: "오준서",
          profileImage:
            "https://avatars.githubusercontent.com/u/40460655?s=96&v=4",
        },
        createdAt: dayjs().toString(),
      },
    ];
  });
}
