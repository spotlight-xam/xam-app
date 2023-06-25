import {
  TouchableOpacity,
  GestureResponderEvent,
  TouchableOpacityProps,
} from "react-native";

import { useTestingGenerateGetUuid } from "@providers";

export type PressableProps = TouchableOpacityProps;
export function Pressable(props: PressableProps) {
  const [testID, record] = useTestingGenerateGetUuid("press");

  const onPress = (event: GestureResponderEvent) => {
    record();

    props.onPress && props.onPress(event);
  };

  return <TouchableOpacity {...props} testID={testID} onPress={onPress} />;
}
