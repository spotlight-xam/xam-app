import { TextInput, TextInputProps } from "react-native";

import { useTestingGenerateGetUuid } from "@providers";

export function Input(props: TextInputProps) {
  const [testID, record] = useTestingGenerateGetUuid("typing");

  const onChangeText = (text: string) => {
    record();

    props.onChangeText && props.onChangeText(text);
  };

  return <TextInput {...props} testID={testID} onChangeText={onChangeText} />;
}
