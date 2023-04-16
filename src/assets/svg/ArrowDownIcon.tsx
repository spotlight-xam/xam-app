import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { SvgIconProps } from "@components/common";
import { getSvgDynamicStyle } from "@helpers/common";

export const ArrowDownIcon = (props: SvgIconProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    {props.filled ? (
      <Path
        d="m12 6-4.03 4L4 6h8Z"
        {...getSvgDynamicStyle(props, { fill: true })}
      />
    ) : (
      <Path
        d="M7.992 10.748a.674.674 0 0 1-.456-.18L3.258 6.64a.841.841 0 0 1-.093-1.107.696.696 0 0 1 .483-.28.67.67 0 0 1 .522.178L7.992 8.95l3.822-3.393a.694.694 0 0 1 .247-.143.65.65 0 0 1 .544.064c.083.05.156.116.214.197.066.08.115.176.146.278a.86.86 0 0 1-.055.626.77.77 0 0 1-.19.243L8.44 10.615a.664.664 0 0 1-.449.133Z"
        {...getSvgDynamicStyle(props, { fill: true })}
      />
    )}
  </Svg>
);
