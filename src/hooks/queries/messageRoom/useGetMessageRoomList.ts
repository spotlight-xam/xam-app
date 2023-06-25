import { useQuery } from "@tanstack/react-query";

export interface MessageRoomEntity {
  id: number;
  name: string;
}
export function useGetMessageRoomList() {
  return useQuery<MessageRoomEntity[]>(["getMessageRoomList"], async () => {
    return [
      { id: 1, name: "공지" },
      { id: 2, name: "자료공유" },
      { id: 3, name: "참고" },
      { id: 4, name: "자유소통" },
      { id: 5, name: "코드질문" },
      { id: 6, name: "개발_로드맵" },
      { id: 7, name: "일정" },
    ];
  });
}
