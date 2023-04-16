import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.302 5.165a.55.55 0 0 1 .785 0 .567.567 0 0 1 .007.787L7.66 11.195a.55.55 0 0 1-.8.015L4.163 8.475a.568.568 0 0 1 .18-.917.55.55 0 0 1 .606.122L7.237 10l4.05-4.819a.194.194 0 0 1 .015-.016Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
