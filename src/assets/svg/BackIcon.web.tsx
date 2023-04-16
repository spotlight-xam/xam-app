import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.114 8.398h0a.563.563 0 0 1-.121-.182l.121.182Zm0 0h.001V8.4l5.486 5.486a.564.564 0 1 0 .798-.798L3.877 8.564h9.609a.564.564 0 1 0 0-1.128H3.877l4.522-4.523a.564.564 0 1 0-.798-.798L2.115 7.601a.563.563 0 0 0-.122.183s0 0 0 0l.046.02.075.594Z"
      {...getSvgDynamicStyle(props, { fill: true, stroke: true })}
      strokeWidth={0.1}
      strokeLinecap="round"
    />
  </svg>
);
