import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const MobileIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M11.111 2H4.89a.906.906 0 0 0-.629.251.842.842 0 0 0-.26.606v10.286c0 .227.094.445.26.606.167.16.393.251.629.251h6.222c.236 0 .462-.09.629-.251a.842.842 0 0 0 .26-.606V2.857a.842.842 0 0 0-.26-.606A.906.906 0 0 0 11.11 2ZM8.444 13.143h-.888v-.857h.888v.857ZM4.89 11.429V2.857h6.222v8.572H4.89Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </Svg>
);
