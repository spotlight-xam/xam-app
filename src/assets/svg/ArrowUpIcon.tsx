import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const ArrowUpIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      {...getSvgDynamicStyle(props, { fill: true })}
      d="M12.285 10.75a.675.675 0 0 1-.457-.18L8 7.053l-3.835 3.39a.695.695 0 0 1-.247.144.654.654 0 0 1-.545-.064.735.735 0 0 1-.214-.197.859.859 0 0 1-.072-.871.772.772 0 0 1 .179-.236L7.55 5.43a.676.676 0 0 1 .453-.179c.166 0 .326.063.454.179l4.284 3.924a.775.775 0 0 1 .176.238.843.843 0 0 1 .05.6.812.812 0 0 1-.133.269.73.73 0 0 1-.246.213.662.662 0 0 1-.304.077Z"
    />
  </Svg>
);
