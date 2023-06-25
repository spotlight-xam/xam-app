import { TouchableOpacity } from "react-native";

import { Text } from "@components/common";
import { useMainNavigation } from "@hooks/navigation";
import { MessageRoomEntity } from "@hooks/queries/messageRoom";

interface MessageRoomListItemProps {
  messageRoom: MessageRoomEntity;
}
export function MessageRoomListItem({ messageRoom }: MessageRoomListItemProps) {
  const navigation = useMainNavigation();

  return (
    <TouchableOpacity
      style={{ paddingHorizontal: 16, paddingVertical: 8, borderRadius: 5 }}
      onPress={() =>
        navigation.navigate("MessageListScreen", {
          messageRoomId: messageRoom.id,
        })
      }
    >
      <Text fontStyle="large" fontWeight="semiBold">
        {messageRoom.name}
      </Text>
    </TouchableOpacity>
  );
}
