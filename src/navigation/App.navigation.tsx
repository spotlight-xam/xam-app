import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";

import { useGlobalState } from "@hooks/queries/common";
import { useTestingGenerate, useTheme } from "@providers";

import { AuthStackNavigation } from "./auth";
import { MainStackNavigation, mainNavigationRef } from "./main";

export function AppNavigation() {
  useTestingGenerate();

  const [accessToken] = useGlobalState<string>(["accessToken"], "");
  const [refreshToken] = useGlobalState<string>(["refreshToken"], "");

  console.log("AppNavigation: ", { accessToken, refreshToken });

  const { mode, colors } = useTheme();

  return (
    <NavigationContainer
      ref={mainNavigationRef}
      theme={{
        dark: mode === "dark",
        colors: {
          ...DefaultTheme.colors,
          background: colors.gray["accents-1"],
          text: colors.gray["accents-8"],
          card: colors.gray.background,
          border: colors.gray["accents-2"],
        },
      }}
    >
      {accessToken ? <MainStackNavigation /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
}
