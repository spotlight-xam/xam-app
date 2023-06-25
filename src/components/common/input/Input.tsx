import { TextInput as _TextInput, TextInputProps, View } from "react-native";

import { useTestingGenerateGetUuid, useTheme } from "@providers";

import { Icon, IconUnion } from "../icon";

export function TextInput(props: TextInputProps) {
  const [testID, record] = useTestingGenerateGetUuid("typing");

  const onChangeText = (text: string) => {
    record();

    props.onChangeText && props.onChangeText(text);
  };

  return <_TextInput {...props} testID={testID} onChangeText={onChangeText} />;
}

interface InputProps extends TextInputProps {
  size?: "small" | "large";
  prefix?: JSX.Element;
}
export function Input(props: InputProps) {
  const { colors, borderRadius } = useTheme();

  const { size, prefix, style } = props;

  const fontSize = { small: 12, default: 14, large: 16 }[size || "default"];
  const iconSize = { small: 16, default: 20, large: 24 }[size || "default"];

  return (
    <View
      style={{
        flexDirection: "row",
        borderColor: colors.gray["accents-4"],
        borderWidth: 1,
        borderRadius,
        alignItems: "center",
        paddingHorizontal: 16,
      }}
    >
      {prefix && (
        <View style={{ marginRight: 8 }}>
          {prefix.type === Icon
            ? {
                ...prefix,
                props: {
                  ...prefix.props,
                  size: iconSize,
                  color: colors.gray.foreground,
                },
              }
            : prefix}
        </View>
      )}

      <TextInput
        {...props}
        style={[
          {
            paddingVertical: 12,
            flex: 1,
            fontSize,
            color: colors.gray.foreground,
          },
          style,
        ]}
      />
    </View>
  );
}
