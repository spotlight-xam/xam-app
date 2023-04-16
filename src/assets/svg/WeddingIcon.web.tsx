import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const WeddingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.25 13a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM6.5 4l.75-1h2.014L10 4 8.25 5.5 6.5 4Z"
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
