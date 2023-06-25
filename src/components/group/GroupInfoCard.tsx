import { Image, View } from "react-native";

import { Text } from "@components/common";
import { useSelectedGroup } from "@hooks/group";
import { useTheme } from "@providers";

export function GroupInfoCard() {
  const { colors } = useTheme();

  const group = useSelectedGroup();

  if (!group) return null;

  return (
    <View
      style={{
        padding: 32,
        borderRadius: 5,
        alignItems: "center",
        backgroundColor: colors.gray.background,
      }}
    >
      <Image
        source={{ uri: group.profileImage }}
        style={{
          width: 80,
          height: 80,
          backgroundColor: colors.primary.origin,
          borderRadius: 5,
          marginBottom: 24,
        }}
      />

      <Text fontStyle="h1" fontWeight="bold" style={{ marginBottom: 16 }}>
        {group.name}
      </Text>

      <Text>{group.description}</Text>
    </View>
  );
}
