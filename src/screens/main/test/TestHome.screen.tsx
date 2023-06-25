import { ScrollView } from "react-native";

import { Icon, ListItem, ListItemTitle, Text } from "@components/common";
import {
  createBottomTabNavigationOptions,
  createNativeStackNavigationOptions,
} from "@helpers/navigation";
import { useMainNavigation } from "@hooks/navigation";
import { useTheme } from "@providers";

export const TestHomeScreenOptions = createNativeStackNavigationOptions({
  headerTitle: "Test",
});
export type TestHomeScreenParams = undefined;
export function TestHomeScreen() {
  const { mode, setMode } = useTheme();
  const navigation = useMainNavigation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ListItemTitle title="Components" />
      <ListItem
        title="Text"
        onPress={() => navigation.navigate("TestTextScreen")}
      />
      <ListItem
        title="Icon"
        onPress={() => navigation.navigate("TestIconScreen")}
      />
      <ListItem
        title="Button"
        onPress={() => navigation.navigate("TestButtonScreen")}
      />

      <ListItemTitle title="Theme" />
      <ListItem
        title="Mode"
        onPress={() => setMode(mode === "dark" ? "light" : "dark")}
        rightComponent={<Text fontWeight="semiBold">{mode}</Text>}
      />
    </ScrollView>
  );
}
