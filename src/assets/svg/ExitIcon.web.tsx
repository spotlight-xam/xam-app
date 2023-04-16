import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const ExitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m6.8 10.393.9.907L10.8 8 7.7 4.7l-.9.907L8.52 7.4H2v1.2h6.52L6.8 10.393ZM12.667 2H3.333A1.333 1.333 0 0 0 2 3.333V6h1.1V3.1h9.8v9.8H3.1V10H2v2.667A1.333 1.333 0 0 0 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
