import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { useSubscriptAppIconToTodoList } from "@hooks/app";

import { MainStackNavigation, mainNavigationRef } from "./main";

export function AppNavigation() {
  useSubscriptAppIconToTodoList();
  return (
    <NavigationContainer ref={mainNavigationRef}>
      <MainStackNavigation />
    </NavigationContainer>
  );
}
