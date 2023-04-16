import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const ShopIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="m13.486 6.536-.947-3.294A.333.333 0 0 0 12.217 3H9.956l.265 3.169a.32.32 0 0 0 .155.25c.218.13.644.368.977.47.567.174 1.396.111 1.87.053a.32.32 0 0 0 .274-.27.314.314 0 0 0-.011-.136Z"
      {...getSvgDynamicStyle(props, { stroke: true })}
    />
    <Path
      d="M9.117 6.889c.318-.097.72-.319.945-.451a.322.322 0 0 0 .156-.305L9.956 3H6.044l-.263 3.133a.32.32 0 0 0 .157.305c.224.132.627.354.944.45.835.256 1.401.256 2.235 0Z"
      {...getSvgDynamicStyle(props, { stroke: true })}
    />
    <Path
      d="m3.46 3.242-.946 3.294a.315.315 0 0 0 .263.406c.473.058 1.302.12 1.87-.053.333-.102.759-.34.976-.47a.322.322 0 0 0 .156-.25L6.044 3H3.783a.337.337 0 0 0-.323.242Z"
      {...getSvgDynamicStyle(props, { stroke: true })}
    />
    <Path
      d="M2.97 6.889v5c0 .295.118.577.328.786.21.208.494.325.79.325h7.823c.297 0 .58-.117.79-.325.21-.209.328-.492.328-.786v-5"
      {...getSvgDynamicStyle(props, { stroke: true })}
    />
  </Svg>
);
