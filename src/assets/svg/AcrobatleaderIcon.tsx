import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const AcrobatleaderIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M7.28 2c-.56 0-2 .518.08 4.918 1.838 3.969 2.878 4.918 5.596 5.78 1.279.432 1.279-1.121.56-1.639-1.6-1.208-7.995-1.812-11.273 1.553-.56.518-.16 1.985 1.279 1.122C5.92 12.18 8.878 7.522 8.399 3.122 8.319 2.432 7.999 2 7.279 2Z"
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeMiterlimit={10}
    />
  </Svg>
);
