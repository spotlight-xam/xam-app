import {
  Pressable as _Pressable,
  GestureResponderEvent,
  PressableProps,
} from "react-native";

import { useTestingGenerateGetUuid } from "@providers";

export function Pressable(props: PressableProps) {
  const [testID, record] = useTestingGenerateGetUuid("press");

  const onPress = (event: GestureResponderEvent) => {
    record();

    props.onPress && props.onPress(event);
  };

  return <_Pressable {...props} testID={testID} onPress={onPress} />;
}
