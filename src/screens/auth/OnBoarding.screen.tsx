import { useEffect } from "react";
import { View } from "react-native";

import { Button, Text } from "@components/common";
import { createNativeStackNavigationOptions } from "@helpers/navigation";
import { useAuthNavigation } from "@hooks/navigation";
import { useGlobalState } from "@hooks/queries/common";

export const OnBoardingScreenOptions = createNativeStackNavigationOptions({
  headerTitle: "반갑습니다.",
});
export type OnBoardingScreenParams = undefined;
export function OnBoardingScreen() {
  const navigation = useAuthNavigation();
  const [, setIsShowOnBoarding] = useGlobalState(["onBoarding"], true);

  useEffect(() => {
    setIsShowOnBoarding(false);
  }, []);

  return (
    <View>
      <Text>처음 오시는군요.</Text>
      <Button label="확인" onPress={() => navigation.navigate("LoginScreen")} />
    </View>
  );
}
