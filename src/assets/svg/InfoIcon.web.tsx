import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0 11.897A5.398 5.398 0 0 1 8 2.603a5.398 5.398 0 0 1 0 10.794Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
    <path
      d="M7.304 5.446a.696.696 0 1 0 1.392 0 .696.696 0 0 0-1.392 0Zm1.044 1.625h-.696a.116.116 0 0 0-.116.117v3.946c0 .064.052.116.116.116h.696a.116.116 0 0 0 .116-.116V7.187a.116.116 0 0 0-.116-.116Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
