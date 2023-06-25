import { useQuery } from "@tanstack/react-query";

export interface GroupListEntity {
  id: number;
  name: string;
  description: string;
  profileImage?: string;
}
export function useGetGroupList() {
  return useQuery<{ myTeamList: GroupListEntity[] }>(["getGroupList"], () => ({
    myTeamList: [
      {
        id: 3,
        name: "xam",
        description:
          "xam은 협업과 커뮤니케이션의 효율성을 향상시키고, 포스트를 AI를 이용한 이력서, 포트폴리오로 변환해주는 기능을 제공하여 팀원들의 업무 관리와 자기소개서 작성에 편의성을 제공합니다. 이러한 서비스를 통해 팀원들은 보다 원활한 협업 환경에서 효과적으로 일할 수 있고, 개인의 업적을 손쉽게 정리하고 공유할 수 있습니다. xam은 팀의 성과를 높이는 핵심 가치를 가진 서비스입니다.",
        profileImage:
          "https://avatars.githubusercontent.com/u/124697344?s=96&v=4",
      },
      { id: 5, name: "team1", description: "테스트용" },
    ],
  }));
}
