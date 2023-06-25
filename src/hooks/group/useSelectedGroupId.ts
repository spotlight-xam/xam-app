import { useEffect } from "react";

import { useGlobalState } from "@hooks/queries/common";
import { useGetGroupList } from "@hooks/queries/group";

export function useSelectedGroupId() {
  const { data } = useGetGroupList();
  const [liftedGroupId, setGroupId] = useGlobalState<number | null>(
    ["groupId"],
    null
  );

  useEffect(() => {
    let groupId: number;

    if (data?.myTeamList) {
      if (
        liftedGroupId &&
        data.myTeamList.map((r) => r.id).includes(liftedGroupId)
      ) {
        groupId = liftedGroupId;
      } else {
        groupId = data.myTeamList[0]?.id || 0;
      }
      console.log("groupId: ", groupId);
      setGroupId(groupId);
    }
  }, [liftedGroupId]);

  return [liftedGroupId, setGroupId] as const;
}
