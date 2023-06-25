import { useQuery } from "@tanstack/react-query";

export interface UserEntity {
  id: number;
  name: string;
  profileImage?: string;
}
export function useGetUserMe() {
  return useQuery<UserEntity>(["getUserMe"], async () => {
    return {
      id: 10,
      name: "오준서",
      profileImage: "https://avatars.githubusercontent.com/u/40460655?s=96&v=4",
    };
  });
}
