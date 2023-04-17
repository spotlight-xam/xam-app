import { NavigatorScreenParams } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import * as main from "@screens/main";

import {
  MainDrawerNavigation,
  MainDrawerNavigationOptions,
  MainDrawerNavigationParamsList,
} from "./Main.drawer.navigation";

export type MainStackNavigationProps =
  NativeStackNavigationProp<MainStackNavigationParamsList>;
export type MainStackNavigationParamsList = {
  MainDrawerNavigation: NavigatorScreenParams<MainDrawerNavigationParamsList>;

  TodoCreateScreen: main.todo.TodoCreateScreenParams;
};

const Stack = createNativeStackNavigator<MainStackNavigationParamsList>();
export function MainStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainDrawerNavigation"
        component={MainDrawerNavigation}
        options={MainDrawerNavigationOptions}
      />

      <Stack.Screen
        name="TodoCreateScreen"
        component={main.todo.TodoCreateScreen}
        options={main.todo.TodoCreateScreenOptions}
      />
    </Stack.Navigator>
  );
}
