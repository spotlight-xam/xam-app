import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { DrawerNavigationOptions } from "@react-navigation/drawer";

import * as main from "@screens/main";

export type MainTabNavigationProps =
  BottomTabNavigationProp<MainTabNavigationParamsList>;
export type MainTabNavigationParamsList = {
  MessageRoomListScreen: main.message.MessageRoomListScreenParams;
  PostListScreen: main.post.PostListScreenParams;
  SettingListScreen: main.setting.SettingListScreenParams;
};

const Tab = createBottomTabNavigator<MainTabNavigationParamsList>();
export const MainTabNavigationOptions: DrawerNavigationOptions = {
  headerShown: false,
};
export function MainTabNavigation() {
  return (
    <Tab.Navigator initialRouteName="PostListScreen">
      <Tab.Screen
        name="MessageRoomListScreen"
        options={main.message.MessageRoomListScreenOptions}
        component={main.message.MessageRoomListScreen}
      />
      <Tab.Screen
        name="PostListScreen"
        options={main.post.PostListScreenOptions}
        component={main.post.PostListScreen}
      />
      <Tab.Screen
        name="SettingListScreen"
        options={main.setting.SettingListScreenOptions}
        component={main.setting.SettingListScreen}
      />
    </Tab.Navigator>
  );
}
