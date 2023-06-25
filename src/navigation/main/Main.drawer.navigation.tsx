import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { GroupDrawer } from "@components/group";

import {
  MainTabNavigationParamsList,
  MainTabNavigation,
  MainTabNavigationOptions,
} from "./Main.tab.navigation";

export type MainDrawerNavigationProps =
  DrawerNavigationProp<MainDrawerNavigationParamsList>;
export type MainDrawerNavigationParamsList = {
  MainTabNavigation: NavigatorScreenParams<MainTabNavigationParamsList>;
};

const Drawer = createDrawerNavigator<MainDrawerNavigationParamsList>();
export const MainDrawerNavigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
export function MainDrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={(props) => <GroupDrawer {...props} />}>
      <Drawer.Screen
        name="MainTabNavigation"
        component={MainTabNavigation}
        options={MainTabNavigationOptions}
      />
    </Drawer.Navigator>
  );
}
