import { useGetGroupList } from "@hooks/queries/group";

import { useSelectedGroupId } from "./useSelectedGroupId";

export function useSelectedGroup() {
  const { data } = useGetGroupList();

  const [groupId] = useSelectedGroupId();

  return data?.myTeamList.find((group) => group.id === groupId) || null;
}
