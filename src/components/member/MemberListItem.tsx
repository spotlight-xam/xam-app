import { Image, TouchableOpacity } from "react-native";

import { Text } from "@components/common";
import { UserEntity } from "@hooks/queries/user";
import { useTheme } from "@providers";

interface MemberListItemProps {
  member: UserEntity;
}
export function MemberListItem({ member }: MemberListItemProps) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}
    >
      <Image
        style={{
          width: 40,
          height: 40,
          borderRadius: 5,
          backgroundColor: colors.primary.origin,
          marginRight: 16,
        }}
        source={{ uri: member?.profileImage }}
      />
      <Text fontWeight="semiBold">{member.name}</Text>
    </TouchableOpacity>
  );
}
