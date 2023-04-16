import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const WebIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 13A5 5 0 0 0 8 3m0 10A5 5 0 0 1 8 3m0 10s-1.667-1.587-1.667-5C6.333 4.677 8 3 8 3m0 10s1.667-1.587 1.667-5C9.667 4.677 8 3 8 3M3 6.333h10M3 9.667h10"
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeWidth={1.2}
      strokeMiterlimit={10}
    />
  </svg>
);
