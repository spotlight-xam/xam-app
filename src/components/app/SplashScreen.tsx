import { useFonts } from "expo-font";
import * as _SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";

_SplashScreen.preventAutoHideAsync();

interface SplashScreenProps {
  children: React.ReactNode;
}
export function SplashScreen({ children }: SplashScreenProps) {
  const [fontsLoaded] = useFonts({
    spoqaBold: require("src/assets/font/SpoqaHanSansNeo-Bold.otf"),
    spoqaLight: require("src/assets/font/SpoqaHanSansNeo-Light.otf"),
    spoqaMedium: require("src/assets/font/SpoqaHanSansNeo-Medium.otf"),
    spoqaRegular: require("src/assets/font/SpoqaHanSansNeo-Regular.otf"),
    spoqaThin: require("src/assets/font/SpoqaHanSansNeo-Thin.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await _SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
}
