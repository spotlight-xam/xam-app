import { ScrollView } from "react-native";

import { useGetMessageRoomList } from "@hooks/queries/messageRoom";

import { MessageRoomListItem } from "./MessageRoomListItem";

export function MessageRoomList() {
  const { data: messageRoomList } = useGetMessageRoomList();

  return (
    <ScrollView>
      {messageRoomList?.map((messageRoom) => (
        <MessageRoomListItem key={messageRoom.id} messageRoom={messageRoom} />
      ))}
    </ScrollView>
  );
}
