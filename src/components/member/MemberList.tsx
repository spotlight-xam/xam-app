import { ScrollView } from "react-native";

import { Text } from "@components/common";
import { useGetMemberList } from "@hooks/queries/member";
import { useGetUserMe } from "@hooks/queries/user";
import { useTheme } from "@providers";

import { MemberListItem } from "./MemberListItem";

export function MemberList() {
  const { colors } = useTheme();

  const { data: memberList } = useGetMemberList();
  const { data: userMe } = useGetUserMe();

  return (
    <ScrollView style={{ paddingVertical: 8 }}>
      {userMe && (
        <>
          <Text
            color={colors.gray["accents-4"]}
            style={{ paddingHorizontal: 16, paddingTop: 8 }}
          >
            내 프로필
          </Text>
          <MemberListItem member={userMe} />
        </>
      )}

      <Text
        color={colors.gray["accents-4"]}
        style={{ paddingHorizontal: 16, paddingTop: 8 }}
      >
        멤버 목록
      </Text>
      {memberList?.map((member) => (
        <MemberListItem key={member.id} member={member} />
      ))}
    </ScrollView>
  );
}
