import { TextInput, TextInputProps } from "react-native";

import { useTestingGenerateGetUuid } from "@providers";

export function Input(props: TextInputProps) {
  const testID = useTestingGenerateGetUuid();

  const onChangeText = (text: string) => {
    if (testID) {
      console.log("[recode] id: " + testID);
    }

    props.onChangeText && props.onChangeText(text);
  };

  return <TextInput {...props} testID={testID} onChangeText={onChangeText} />;
}
