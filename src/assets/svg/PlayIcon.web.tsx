import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.95 7.394a.7.7 0 0 1 0 1.212l-5.4 3.118a.7.7 0 0 1-1.05-.606V4.882a.7.7 0 0 1 1.05-.606l5.4 3.118Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
