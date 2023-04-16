import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const PolicyIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M14 8.929a2.799 2.799 0 0 0-1.26-2.341 2.758 2.758 0 0 0-3.708.642A2.794 2.794 0 0 0 9.385 11v3.5l1.846-.879 1.846.879V11A2.775 2.775 0 0 0 14 8.928Zm-1.846 4.104-.923-.44-.923.44v-1.481c.596.216 1.25.216 1.846 0v1.48Zm-.923-2.247c-.365 0-.722-.11-1.026-.313a1.867 1.867 0 0 1-.28-2.857 1.843 1.843 0 0 1 2.012-.403c.338.14.626.378.829.684a1.865 1.865 0 0 1-.23 2.344 1.843 1.843 0 0 1-1.305.545ZM4.308 7.071h3.23V8h-3.23v-.929ZM4.308 4.286h4.615v.928H4.308v-.928Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
    <Path
      d="M2.923 13.5a.921.921 0 0 1-.652-.272A.932.932 0 0 1 2 12.57V2.43c0-.247.098-.483.27-.657a.921.921 0 0 1 .653-.272h7.385c.244 0 .48.098.652.272.173.174.27.41.27.657v1.857h-.922V2.429H2.923V12.57h4.615v.929H2.923Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
    <Path
      d="M14 8.929a2.799 2.799 0 0 0-1.26-2.341 2.758 2.758 0 0 0-3.708.642A2.794 2.794 0 0 0 9.385 11v3.5l1.846-.879 1.846.879V11A2.775 2.775 0 0 0 14 8.928Zm-1.846 4.104-.923-.44-.923.44v-1.481c.596.216 1.25.216 1.846 0v1.48Zm-.923-2.247c-.365 0-.722-.11-1.026-.313a1.867 1.867 0 0 1-.28-2.857 1.843 1.843 0 0 1 2.012-.403c.338.14.626.378.829.684a1.865 1.865 0 0 1-.23 2.344 1.843 1.843 0 0 1-1.305.545ZM4.308 7.071h3.23V8h-3.23v-.929ZM4.308 4.286h4.615v.928H4.308v-.928Z"
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeWidth={0.1}
    />
    <Path
      d="M2.923 13.5a.921.921 0 0 1-.652-.272A.932.932 0 0 1 2 12.57V2.43c0-.247.098-.483.27-.657a.921.921 0 0 1 .653-.272h7.385c.244 0 .48.098.652.272.173.174.27.41.27.657v1.857h-.922V2.429H2.923V12.57h4.615v.929H2.923Z"
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeWidth={0.1}
    />
  </Svg>
);
