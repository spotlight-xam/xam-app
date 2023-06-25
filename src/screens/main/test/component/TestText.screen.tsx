import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ListItemTitle, Text } from "@components/common";
import { fontStyleUnionList } from "@constants/fontStyle.constant";
import { fontWeightUnionList } from "@constants/fontWeight.constant";
import { createNativeStackNavigationOptions } from "@helpers/navigation";
import { useTheme } from "@providers";

export const TestTextScreenOptions = createNativeStackNavigationOptions({
  headerTitle: "Text",
});
export type TestTextScreenParams = undefined;
export function TestTextScreen() {
  const { colors } = useTheme();
  const { bottom } = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: bottom }}>
      <ListItemTitle title="Sizes" />
      <View style={{ paddingVertical: 8, paddingHorizontal: 16, gap: 8 }}>
        {fontStyleUnionList.map((fontStyle) => (
          <Text key={fontStyle} fontStyle={fontStyle}>
            Xam Design System. ({fontStyle})
          </Text>
        ))}
      </View>
      <ListItemTitle title="Weights" />
      <View style={{ paddingVertical: 8, paddingHorizontal: 16, gap: 8 }}>
        {fontWeightUnionList.map((fontWeight) => (
          <Text key={fontWeight} fontStyle="large" fontWeight={fontWeight}>
            Xam Design System. ({fontWeight})
          </Text>
        ))}
      </View>

      <ListItemTitle title="Color" />
      <View style={{ paddingVertical: 8, paddingHorizontal: 16 }}>
        <Text fontStyle="large" color={colors.primary.origin}>
          Xam Design System.
        </Text>
      </View>

      <ListItemTitle title="Modifiers" />
      <View style={{ paddingVertical: 8, paddingHorizontal: 16 }}>
        <Text fontStyle="large">
          The{" "}
          <Text fontStyle="large" fontWeight="bold">
            Mommoss
          </Text>{" "}
          <Text
            fontStyle="large"
            style={{ textDecorationLine: "line-through" }}
          >
            bigger
          </Text>{" "}
          than an{" "}
          <Text fontStyle="large" style={{ textDecorationLine: "underline" }}>
            elephant
          </Text>
          .
        </Text>
      </View>

      <ListItemTitle title="EllipsizeMode" />
      <View
        style={{ paddingVertical: 8, paddingHorizontal: 16, maxWidth: 100 }}
      >
        <Text fontStyle="large" ellipsizeMode="head" numberOfLines={1}>
          Xam Design System.
        </Text>
      </View>
    </ScrollView>
  );
}
