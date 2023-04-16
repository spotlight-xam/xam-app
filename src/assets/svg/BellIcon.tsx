import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const BellIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M8 1.5a1 1 0 0 0-1 1c0 .043.01.084.016.125A4.011 4.011 0 0 0 4 6.5V11c0 .283-.217.5-.5.5H3v1h3.594c-.06.16-.092.33-.094.5 0 .822.678 1.5 1.5 1.5s1.5-.678 1.5-1.5a1.475 1.475 0 0 0-.094-.5H13v-1h-.5a.491.491 0 0 1-.5-.5V6.64c0-1.878-1.256-3.554-3.015-4.015C8.99 2.584 9 2.543 9 2.5a1 1 0 0 0-1-1Zm-.219 2c.073-.006.145 0 .219 0h.094C9.727 3.549 11 4.98 11 6.64V11c0 .176.037.342.094.5H4.907c.06-.16.091-.33.093-.5V6.5a3.003 3.003 0 0 1 2.781-3Zm.219 9c.281 0 .5.219.5.5s-.219.5-.5.5a.494.494 0 0 1-.5-.5c0-.281.219-.5.5-.5Z"
      {...getSvgDynamicStyle(props, { fill: true, stroke: true })}
      strokeWidth={0.1}
      strokeLinejoin="round"
    />
  </Svg>
);
