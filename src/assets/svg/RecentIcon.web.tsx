import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const RecentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 4.7V8l2.2 1.1"
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
