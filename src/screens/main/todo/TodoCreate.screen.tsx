import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@components/common";
import { createNativeStackNavigationOptions } from "@helpers/navigation";

export const TodoCreateScreenOptions = createNativeStackNavigationOptions({
  headerTitle: "할 일 만들기",
});
export type TodoCreateScreenParams = undefined;
export function TodoCreateScreen() {
  return (
    <SafeAreaView edges={["bottom", "left", "right"]}>
      <Text>할 일 만들기</Text>
    </SafeAreaView>
  );
}
