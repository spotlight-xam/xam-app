import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const PlusBIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      {...getSvgDynamicStyle(props, { fill: true })}
      d="M8.593 3.593a.593.593 0 1 0-1.186 0v3.814H3.593a.593.593 0 1 0 0 1.186h3.814v3.814a.593.593 0 0 0 1.186 0V8.593h3.814a.593.593 0 0 0 0-1.186H8.593V3.593Z"
    />
  </Svg>
);
