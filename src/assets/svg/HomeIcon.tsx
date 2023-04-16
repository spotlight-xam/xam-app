import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const HomeIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M8.265 2.099a.42.42 0 0 0-.538 0L1.5 7.27l.539.726.761-.633v5.714c0 .245.092.48.254.652.163.173.383.27.613.271h8.666c.23 0 .45-.098.613-.27a.957.957 0 0 0 .254-.653v-5.71l.761.633.539-.726L8.265 2.1Zm.602 10.978H7.133V9.385h1.734v3.692Zm.866 0V9.385a.955.955 0 0 0-.254-.653.842.842 0 0 0-.612-.27H7.133c-.23 0-.45.097-.612.27a.955.955 0 0 0-.254.653v3.692h-2.6V6.644L8 3.048l4.333 3.6v6.429h-2.6Z"
      {...getSvgDynamicStyle(props, { fill: true, stroke: true })}
      strokeWidth={0.2}
    />
  </Svg>
);
