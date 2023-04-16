import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 2h-2v-.5a.5.5 0 0 0-1 0V2H6v-.5a.5.5 0 0 0-1 0V2H3c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1Zm0 11H3V6h10v7Zm0-8H3V3h2v1h1V3h4v1h1V3h2v2Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
