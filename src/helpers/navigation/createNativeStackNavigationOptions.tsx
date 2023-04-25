import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { Icon, Pressable } from "@components/common";
import { MainStackNavigationProps } from "@navigation/main";

import { NavigationOptionHeaderTitle } from "./NavigationOptionHeaderTitle";
import {
  NavigationOptionRightButtons,
  RightButton,
} from "./NavigationOptionRightButtons";

export type CreateNativeStackNavigationOptionsProps = {
  headerTitle: string | React.ReactNode;
  rightButtons?: RightButton[];
  headerShown?: boolean;
  paddingRight?: number;
};

export function createNativeStackNavigationOptions({
  headerTitle,
  rightButtons,
  headerShown,
  paddingRight,
}: CreateNativeStackNavigationOptionsProps) {
  return ({
    navigation,
  }: {
    navigation: MainStackNavigationProps;
  }): NativeStackNavigationOptions => ({
    headerBackVisible: false,
    headerShadowVisible: false,
    headerShown,
    headerLeft: ({ canGoBack }) =>
      canGoBack ? (
        <Pressable
          style={{ width: 32, height: 44, justifyContent: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Icon size={24} name="BackIcon" />
        </Pressable>
      ) : null,
    headerRight: NavigationOptionRightButtons({
      navigation,
      rightButtons,
      paddingRight,
    }),
    headerTitle: NavigationOptionHeaderTitle({ headerTitle }),
  });
}
