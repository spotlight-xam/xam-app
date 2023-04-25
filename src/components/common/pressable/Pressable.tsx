import {
  Pressable as _Pressable,
  GestureResponderEvent,
  PressableProps,
} from "react-native";

import { useTestingGenerateGetUuid } from "@providers";

export function Pressable(props: PressableProps) {
  const testID = useTestingGenerateGetUuid();

  const onPress = (event: GestureResponderEvent) => {
    if (testID) {
      console.log("[recode] id: " + testID);
    }
    props.onPress && props.onPress(event);
  };

  return <_Pressable {...props} testID={testID} onPress={onPress} />;
}
