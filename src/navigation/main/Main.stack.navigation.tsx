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
  MessageListScreen: main.message.MessageListScreenParams;
};

const Stack = createNativeStackNavigator<MainStackNavigationParamsList>();
export function MainStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainDrawerNavigation"
        options={MainDrawerNavigationOptions}
        component={MainDrawerNavigation}
      />

      <Stack.Screen
        name="MessageListScreen"
        options={main.message.MessageListScreenOptions}
        component={main.message.MessageListScreen}
      />
    </Stack.Navigator>
  );
}
