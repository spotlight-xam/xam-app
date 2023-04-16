import * as React from "react";
import Svg, { SvgProps, Mask, Rect, Path, Circle } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const BusinessCardIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Mask id="a" fill="#fff">
      <Rect x={2.5} y={4} width={11} height={9} rx={1} />
    </Mask>
    <Rect
      x={2.5}
      y={4}
      width={11}
      height={9}
      rx={1}
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeWidth={2.2}
      mask="url(#a)"
    />
    <Path
      d="M5 7.5h2M5 9.5h2"
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeWidth={1.1}
      strokeLinecap="round"
    />
    <Circle
      cx={10}
      cy={7.5}
      r={1}
      {...getSvgDynamicStyle(props, { fill: true })}
    />
    <Path
      d="M11.5 10a1.5 1.5 0 1 0-3 0h3Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </Svg>
);
