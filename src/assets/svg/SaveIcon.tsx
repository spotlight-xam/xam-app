import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const SaveIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M8 2c.358 0 .65.275.65.615V7.75l1.542-1.605a.676.676 0 0 1 .919-.02c.26.235.269.624.021.87L8.47 9.63a.668.668 0 0 1-.47.19.668.668 0 0 1-.47-.19L4.866 6.995a.592.592 0 0 1 .021-.87.676.676 0 0 1 .919.02L7.35 7.75V2.615c0-.34.29-.615.65-.615Z"
      {...getSvgDynamicStyle(props, { fill: true })}
      fillRule="evenodd"
      clipRule="evenodd"
    />
    <Path
      d="M6.225 3.59h-3.55A.674.674 0 0 0 2 4.263v9.064c0 .372.302.673.675.673h10.65a.674.674 0 0 0 .675-.673V4.263a.674.674 0 0 0-.675-.673h-3.55v1.29h2.975v7.97H3.31V4.88h2.915V3.59Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </Svg>
);
