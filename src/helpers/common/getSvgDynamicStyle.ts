import { Platform } from "react-native";

interface SvgProps {
  width?: number | string;
  height?: number | string;
  color?: string | (symbol & { __TYPE__: "Color" });
}
export function getSvgDynamicStyle(
  props: SvgProps,
  { fill = false, stroke = false }
) {
  return {
    ...(Platform.OS === "web"
      ? {
          style: {
            scale: String((props?.width ? Number(props.width) : 16) / 16),
          },
        }
      : {
          scaleX: (props?.width ? Number(props.width) : 16) / 16,
          scaleY: (props?.height ? Number(props.height) : 16) / 16,
        }),
    ...(fill ? { fill: String(props.color) } : {}),
    ...(stroke ? { stroke: String(props.color) } : {}),
  };
}
