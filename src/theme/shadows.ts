import { Platform, ViewStyle } from "react-native";

type ShadowStyle = Pick<
  ViewStyle,
  | "shadowColor"
  | "shadowOffset"
  | "shadowOpacity"
  | "shadowRadius"
  | "elevation"
>;

export const shadows = {
  blur_4: Platform.select<ShadowStyle>({
    ios: {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.24,
      shadowRadius: 4,
    },
    android: {
      elevation: 4,
    },
  }),

  blur_8: Platform.select<ShadowStyle>({
    ios: {
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.24,
      shadowRadius: 8,
    },
    android: {
      elevation: 13,
    },
  }),

  blur_16: Platform.select<ShadowStyle>({
    ios: {
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.24,
      shadowRadius: 16.0,
    },
    android: {
      elevation: 24,
    },
  }),
};
