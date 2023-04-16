import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const ArrowRightIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="m4.83 13.92.003.002c.254.236.65.24.893-.003l5.444-5.47.003-.003a.65.65 0 0 0-.003-.895L5.726 2.08l-.003-.003a.645.645 0 0 0-.893.003l-.003.003a.65.65 0 0 0 .003.895l5.006 5.013L4.83 13.02l-.003.002a.65.65 0 0 0 .003.896Z"
      {...getSvgDynamicStyle(props, { fill: true, stroke: true })}
      strokeWidth={0.2}
    />
  </Svg>
);
