import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const MailUnreadIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M14 5.88v5.089c0 .519-.19 1.018-.533 1.395-.342.377-.81.603-1.307.633l-.11.003h-8.1c-.498 0-.977-.198-1.34-.555a2.068 2.068 0 0 1-.607-1.361L2 10.969V5.88l5.791 3.16a.436.436 0 0 0 .418 0L14 5.88ZM3.95 3h8.1c.483 0 .95.187 1.308.525.359.337.584.802.632 1.302L8 8.098l-5.99-3.27c.046-.48.256-.929.591-1.263a1.913 1.913 0 0 1 1.237-.56L3.95 3h8.1-8.1Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </Svg>
);
