import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const CrossIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="m3.725 4.457.007.015.012.011 3.525 3.52-3.525 3.435-.012.012-.007.015a.781.781 0 0 0-.075.344c0 .119.024.242.075.344l.007.015.012.011c.21.21.53.21.74 0L8.01 8.743l3.441 3.436c.209.208.515.204.715.104l.015-.007.011-.011c.21-.21.21-.53 0-.74L8.75 8.003l3.442-3.52v-.001c.21-.21.21-.53 0-.74l-.011-.011-.015-.007a.77.77 0 0 0-.492-.055.307.307 0 0 0-.137.073L8.011 7.264l-3.527-3.52-.011-.012-.015-.007a.784.784 0 0 0-.344-.075.784.784 0 0 0-.344.075l-.03.015-.015.03a.781.781 0 0 0-.075.343c0 .12.024.242.075.344Z"
      {...getSvgDynamicStyle(props, { fill: true, stroke: true })}
      strokeWidth={0.2}
    />
  </Svg>
);
