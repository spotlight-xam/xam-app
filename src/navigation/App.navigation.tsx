import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { useGlobalState } from "@hooks/queries/common";
import { useTestingGenerate } from "@providers";

import { AuthStackNavigation } from "./auth";
import { MainStackNavigation, mainNavigationRef } from "./main";

export function AppNavigation() {
  useTestingGenerate();

  const [accessToken] = useGlobalState<string>(["accessToken"], "");
  const [refreshToken] = useGlobalState<string>(["refreshToken"], "");

  console.log("AppNavigation: ", { accessToken, refreshToken });

  return (
    <NavigationContainer ref={mainNavigationRef}>
      {accessToken ? <MainStackNavigation /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
}
