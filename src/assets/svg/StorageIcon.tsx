import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const StorageIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M1.5 2.145c0-.356.321-.645.717-.645h11.566c.19.001.371.07.505.19a.62.62 0 0 1 .212.455v11.71a.615.615 0 0 1-.21.456.76.76 0 0 1-.507.189H2.217a.765.765 0 0 1-.505-.19.62.62 0 0 1-.212-.455V2.145ZM13.4 7.39V2.6H2.65v4.79H13.4Zm0 1.22H2.65v4.79H13.4V8.61ZM5.833 4.8a.5.5 0 0 1 .5-.5h3.334a.5.5 0 0 1 .5.5v.1a.5.5 0 0 1-.5.5H6.333a.5.5 0 0 1-.5-.5v-.1Zm0 5.85a.5.5 0 0 1 .5-.5h3.334a.5.5 0 0 1 .5.5v.1a.5.5 0 0 1-.5.5H6.333a.5.5 0 0 1-.5-.5v-.1Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </Svg>
);
