import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Button, Icon, ListItemTitle } from "@components/common";
import { createNativeStackNavigationOptions } from "@helpers/navigation";

export const TestButtonScreenOptions = createNativeStackNavigationOptions({
  headerTitle: "Button",
});
export type TestButtonScreenParams = undefined;
export function TestButtonScreen() {
  const { bottom } = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: bottom }}>
      <ListItemTitle title="Sizes" />
      <View
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          gap: 8,
        }}
      >
        <Button size="small">Upload</Button>
        <Button>Upload</Button>
        <Button size="large">Upload</Button>
      </View>

      <ListItemTitle title="Shapes" />
      <View
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          gap: 8,
        }}
      >
        <Button size="small" icon="ArrowUpIcon" />
        <Button icon="ArrowUpIcon" />
        <Button size="large" icon="ArrowUpIcon" />
        <Button size="small" icon="ArrowUpIcon" shape="circle" />
        <Button icon="ArrowUpIcon" shape="circle" />
        <Button size="large" icon="ArrowUpIcon" shape="circle" />
      </View>

      <ListItemTitle title="Prefix and Suffix" />
      <View
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          alignItems: "center",
          gap: 8,
        }}
      >
        <Button prefix={<Icon name="ArrowUpIcon" />}>Upload</Button>
        <Button suffix={<Icon name="ArrowUpIcon" />}>Upload</Button>
        <Button
          suffix={<Icon name="ArrowUpIcon" />}
          prefix={<Icon name="ArrowUpIcon" />}
        >
          Upload
        </Button>
      </View>

      <ListItemTitle title="Sizes with Prefix and Suffix" />
      <View
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          alignItems: "center",
          gap: 8,
        }}
      >
        <Button size="small" prefix={<Icon name="ArrowUpIcon" />}>
          Upload
        </Button>
        <Button suffix={<Icon name="ArrowUpIcon" />}>Upload</Button>
        <Button
          size="large"
          suffix={<Icon name="ArrowUpIcon" />}
          prefix={<Icon name="ArrowUpIcon" />}
        >
          Upload
        </Button>
      </View>

      <ListItemTitle title="Alignments" />
      <View style={{ paddingVertical: 8, paddingHorizontal: 16, gap: 8 }}>
        <Button prefix={<Icon name="ArrowUpIcon" />} align="start">
          Upload
        </Button>

        <Button suffix={<Icon name="ArrowUpIcon" />} align="start">
          Upload
        </Button>

        <Button prefix={<Icon name="ArrowUpIcon" />} align="grow">
          Upload
        </Button>

        <Button
          prefix={<Icon name="ArrowUpIcon" />}
          suffix={<Icon name="ArrowUpIcon" />}
          align="grow"
        >
          Upload
        </Button>

        <Button
          prefix={<Icon name="ArrowUpIcon" />}
          suffix={<Icon name="ArrowUpIcon" />}
          align="start"
        >
          Upload
        </Button>
      </View>
    </ScrollView>
  );
}
