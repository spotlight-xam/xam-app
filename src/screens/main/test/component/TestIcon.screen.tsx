import { ScrollView, View } from "react-native";

import { Button, ListItem, ListItemTitle, Text } from "@components/common";
import { createNativeStackNavigationOptions } from "@helpers/navigation";

export const TestIconScreenOptions = createNativeStackNavigationOptions({
  headerTitle: "Icon",
});
export type TestIconScreenParams = undefined;
export function TestIconScreen() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 16 }}>
      <ListItem title="Display text using well-defined typographic styles." />

      <ListItemTitle title="Size" />
      <ListItem title="These sizes are standardized across form components." />

      <View
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Button size="small">Upload</Button>
        <Button>Upload</Button>
        <Button size="large">Upload</Button>
      </View>

      <ListItemTitle title="Shapes" />
      <ListItem title="Icon-only buttons should include the svgOnly prop and an aria-label." />
    </ScrollView>
  );
}
