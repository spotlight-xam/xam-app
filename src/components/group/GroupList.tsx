import { View } from "react-native";

import { useGetGroupList } from "@hooks/queries/group";

import { GroupListItem } from "./GroupListItem";

export function GroupList() {
  const { data } = useGetGroupList();

  return (
    <View>
      {data?.myTeamList.map((group) => (
        <GroupListItem key={group.id} group={group} />
      ))}
    </View>
  );
}
