import { useNavigation as _useNavigation } from "@react-navigation/native";

import { AuthStackNavigationProps } from "@navigation/auth";
import { MainStackNavigationProps } from "@navigation/main";

export const useMainNavigation = () =>
  _useNavigation<MainStackNavigationProps>();
export const useAuthNavigation = () =>
  _useNavigation<AuthStackNavigationProps>();
