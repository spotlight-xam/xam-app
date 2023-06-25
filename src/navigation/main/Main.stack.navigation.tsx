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
  PostViewScreen: main.post.PostViewScreenParams;

  TestHomeScreen: main.test.TestHomeScreenParams;
  TestTextScreen: main.test.component.TestTextScreenParams;
  TestIconScreen: main.test.component.TestIconScreenParams;
  TestButtonScreen: main.test.component.TestButtonScreenParams;
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

      <Stack.Screen
        name="PostViewScreen"
        options={main.post.PostViewScreenOptions}
        component={main.post.PostViewScreen}
      />

      <Stack.Screen
        name="TestHomeScreen"
        options={main.test.TestHomeScreenOptions}
        component={main.test.TestHomeScreen}
      />
      <Stack.Screen
        name="TestTextScreen"
        options={main.test.component.TestTextScreenOptions}
        component={main.test.component.TestTextScreen}
      />
      <Stack.Screen
        name="TestIconScreen"
        options={main.test.component.TestIconScreenOptions}
        component={main.test.component.TestIconScreen}
      />
      <Stack.Screen
        name="TestButtonScreen"
        options={main.test.component.TestButtonScreenOptions}
        component={main.test.component.TestButtonScreen}
      />
    </Stack.Navigator>
  );
}
