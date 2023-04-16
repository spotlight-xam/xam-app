import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const CommonFileIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M5.5 8.542h5m-5 2.166h3M8.625 1.5H3v13h10V5.4M8.625 1.5 13 5.4M8.625 1.5v3.9H13"
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
