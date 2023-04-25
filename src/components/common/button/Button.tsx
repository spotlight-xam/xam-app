import { useTheme } from "@providers";

import { Pressable } from "../pressable";
import { Text } from "../text";

export interface ButtonProps {
  label: string;
  onPress?: () => void;
}
export function Button({ label, onPress }: ButtonProps) {
  const { colors, borderRadius } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={{ backgroundColor: colors.primary.origin, borderRadius }}
    >
      <Text>{label}</Text>
    </Pressable>
  );
}
