import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const LicenseIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M9.723 6.162c0 .938-.768 1.706-1.723 1.706a1.714 1.714 0 0 1-1.723-1.706c0-.938.768-1.705 1.723-1.705.956 0 1.723.767 1.723 1.705Z"
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeWidth={1.1}
    />
    <Path
      d="M12.45 6.162c0 2.433-1.988 4.413-4.45 4.413s-4.45-1.98-4.45-4.413C3.55 3.73 5.538 1.75 8 1.75s4.45 1.98 4.45 4.412Z"
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeWidth={1.1}
    />
    <Path
      d="M4.818 13.832h-.55v.868l.785-.371-.235-.498ZM8 12.328l.235-.498L8 11.72l-.235.11.235.498Zm3.182 1.504-.235.497.785.37v-.867h-.55Zm-6.129.497 3.182-1.504-.47-.995-3.182 1.504.47.995ZM4.268 9.32v4.511h1.1v-4.51h-1.1Zm6.364 0v4.511h1.1v-4.51h-1.1Zm.785 4.014L8.235 11.83l-.47.995 3.182 1.504.47-.995Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </Svg>
);
