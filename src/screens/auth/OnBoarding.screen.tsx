import { useEffect } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Button, Text } from "@components/common";
import { createNativeStackNavigationOptions } from "@helpers/navigation";
import { useAuthNavigation } from "@hooks/navigation";
import { useGlobalState } from "@hooks/queries/common";

export const OnBoardingScreenOptions = createNativeStackNavigationOptions({
  headerTitle: "잼?",
});
export type OnBoardingScreenParams = undefined;
export function OnBoardingScreen() {
  const navigation = useAuthNavigation();
  const { bottom } = useSafeAreaInsets();

  const [, setIsShowOnBoarding] = useGlobalState(["onBoarding"], true);

  useEffect(() => {
    setIsShowOnBoarding(false);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: bottom + 32,
      }}
    >
      <View>
        <Text fontStyle="h3" fontWeight="bold" style={{ marginBottom: 16 }}>
          {`처음 뵙는군요.\n잼에 오신걸 환영합니다.`}
        </Text>

        <Text
          fontStyle="large"
          fontWeight="semiBold"
          style={{ marginBottom: 32 }}
        >
          {`잼에서 지원하는 핵심 기능에 대해\n간단히 설명 드리겠습니다.`}
        </Text>

        <Text fontStyle="xLarge" fontWeight="bold" style={{ marginBottom: 8 }}>
          1. 나의 활동, 결과물을 포트폴리오 또는 자기소개서로 변환
        </Text>
        <Text style={{ marginBottom: 32 }}>
          동아리, 회사 지원에 필요한 서류를 쉽게 작성할 수 있도록 도와주는
          커스텀 가능한 AI활용 기능입니다.
        </Text>

        <Text fontStyle="xLarge" fontWeight="bold" style={{ marginBottom: 8 }}>
          2. 팀 관련 협업 기능
        </Text>
        <Text style={{ marginBottom: 32 }}>
          팀으로 활동할 때도 잼을 사용 할 수 있도록 채팅방, 팀별 포스트 작성,
          여러 기능이 있습니다.
        </Text>
      </View>

      <Button onPress={() => navigation.replace("LoginScreen")}>확인</Button>
    </View>
  );
}
