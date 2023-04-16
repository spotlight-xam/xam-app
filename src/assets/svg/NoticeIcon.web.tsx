import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const NoticeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 7a.5.5 0 0 1-.5.5H7a.5.5 0 1 1 0-1h4a.5.5 0 0 1 .5.5ZM11 8.5H7a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1ZM14 3v10a1.002 1.002 0 0 1-1 1H3a1.001 1.001 0 0 1-1-1V3a1.001 1.001 0 0 1 1-1h10a1.001 1.001 0 0 1 1 1ZM3 13h1.5V3H3v10Zm10 0V3H5.5v10H13Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
