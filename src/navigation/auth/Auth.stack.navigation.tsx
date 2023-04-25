import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { useGlobalState } from "@hooks/queries/common";
import * as auth from "@screens/auth";

export type AuthStackNavigationProps =
  NativeStackNavigationProp<AuthStackNavigationParamList>;
export type AuthStackNavigationParamList = {
  LoginScreen: auth.LoginScreenParams;
  OnBoardingScreen: auth.OnBoardingScreenParams;
};
const Stack = createNativeStackNavigator<AuthStackNavigationParamList>();

export function AuthStackNavigation() {
  const [isShowOnBoarding] = useGlobalState(["onBoarding"], true);

  return (
    <Stack.Navigator
      initialRouteName={isShowOnBoarding ? "OnBoardingScreen" : "LoginScreen"}
    >
      <Stack.Screen
        name="LoginScreen"
        options={auth.LoginScreenOptions}
        component={auth.LoginScreen}
      />
      <Stack.Screen
        name="OnBoardingScreen"
        options={auth.OnBoardingScreenOptions}
        component={auth.OnBoardingScreen}
      />
    </Stack.Navigator>
  );
}
