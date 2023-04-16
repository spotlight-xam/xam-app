import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const BusinessCardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="a" fill="#fff">
      <rect x={2.5} y={4} width={11} height={9} rx={1} />
    </mask>
    <rect
      x={2.5}
      y={4}
      width={11}
      height={9}
      rx={1}
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeWidth={2.2}
      mask="url(#a)"
    />
    <path
      d="M5 7.5h2M5 9.5h2"
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeWidth={1.1}
      strokeLinecap="round"
    />
    <circle
      cx={10}
      cy={7.5}
      r={1}
      {...getSvgDynamicStyle(props, { fill: true })}
    />
    <path
      d="M11.5 10a1.5 1.5 0 1 0-3 0h3Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
