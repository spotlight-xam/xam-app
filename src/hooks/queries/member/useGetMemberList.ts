import { useQuery } from "@tanstack/react-query";

import { UserEntity } from "../user";

export function useGetMemberList() {
  return useQuery<UserEntity[]>(["getMemberList"], () => {
    return [
      {
        id: 1,
        name: "오원택",
      },
      {
        id: 2,
        name: "김유진",
      },
      {
        id: 3,
        name: "이호준",
      },
    ];
  });
}
