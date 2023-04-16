import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const ImageIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M10.333 6.747a1.5 1.5 0 1 1-1.666-2.495 1.5 1.5 0 0 1 1.666 2.495Zm-.555-1.663a.5.5 0 1 0-.556.832.5.5 0 0 0 .556-.832Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
    <Path
      d="M3 2h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm0 8v3h10v-1l-2.5-2.5-.795.795a1 1 0 0 1-1.41 0L5.5 7.5 3 10Zm8.205-1.21L13 10.585V3H3v5.585L4.795 6.79a1 1 0 0 1 1.41 0L9 9.585l.795-.795a1 1 0 0 1 1.41 0Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </Svg>
);
