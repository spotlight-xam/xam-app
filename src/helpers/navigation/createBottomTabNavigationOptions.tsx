import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Platform, Text } from "react-native";

import { Icon, IconUnion, Pressable } from "@components/common";
import { MainStackNavigationProps } from "@navigation/main";
import { useTheme } from "@providers";

import { NavigationOptionHeaderTitle } from "./NavigationOptionHeaderTitle";
import {
  NavigationOptionRightButtons,
  RightButton,
} from "./NavigationOptionRightButtons";

interface CreateBottomTabNavigationOptionsProps {
  tabBarIcon: IconUnion;
  tabBarLabel: string;
  headerTitle: string | React.ReactNode;
  rightButtons?: RightButton[];
  headerTitleAlign?: "center" | "left";
}
export function createBottomTabNavigationOptions({
  tabBarIcon,
  tabBarLabel,
  headerTitle,
  rightButtons,
  headerTitleAlign,
}: CreateBottomTabNavigationOptionsProps) {
  return ({
    navigation,
  }: {
    navigation: MainStackNavigationProps;
  }): BottomTabNavigationOptions => ({
    headerShadowVisible: false,
    tabBarButton: Pressable,
    tabBarIcon: ({ focused }) => {
      const { colors } = useTheme();

      return (
        <Icon
          color={focused ? colors.gray["accents-8"] : colors.gray["accents-3"]}
          size={22}
          name={tabBarIcon}
        />
      );
    },
    tabBarLabel: ({ focused }) => {
      const { colors } = useTheme();

      return (
        <Text
          style={{
            fontSize: 12,
            color: focused
              ? colors.gray["accents-8"]
              : colors.gray["accents-3"],
            paddingBottom: Platform.OS === "android" ? 4 : 0,
          }}
        >
          {tabBarLabel}
        </Text>
      );
    },
    headerTitleAlign,
    headerTitle: NavigationOptionHeaderTitle({ headerTitle }),
    headerRight: NavigationOptionRightButtons({
      navigation,
      rightButtons,
      paddingRight: 16,
    }),
  });
}
