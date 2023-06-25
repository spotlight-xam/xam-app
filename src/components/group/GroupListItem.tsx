import { Image, TouchableOpacity, View } from "react-native";

import { Text } from "@components/common";
import { useSelectedGroupId } from "@hooks/group";
import { GroupListEntity } from "@hooks/queries/group";
import { useTheme } from "@providers";

interface GroupListItemProps {
  group: GroupListEntity;
}
export function GroupListItem({ group }: GroupListItemProps) {
  const { colors } = useTheme();

  const [groupId, setGroupId] = useSelectedGroupId();

  return (
    <TouchableOpacity
      style={{ padding: 4 }}
      onPress={() => setGroupId(group.id)}
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 4,
          paddingVertical: 12,
          borderRadius: 5,
          backgroundColor:
            groupId === group.id ? colors.primary.soft : undefined,
        }}
      >
        <Image
          source={{ uri: group.profileImage }}
          style={{
            width: 60,
            height: 60,
            backgroundColor: colors.primary.origin,
            borderRadius: 5,
            marginRight: 16,
          }}
        />
        <View style={{ justifyContent: "center" }}>
          <Text color={colors.gray["accents-6"]} fontStyle="small">
            #{group.id}
          </Text>
          <Text fontStyle="large" fontWeight="bold">
            {group.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
