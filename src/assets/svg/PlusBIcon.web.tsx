import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const PlusBIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.593 3.593a.593.593 0 1 0-1.186 0v3.814H3.593a.593.593 0 1 0 0 1.186h3.814v3.814a.593.593 0 0 0 1.186 0V8.593h3.814a.593.593 0 0 0 0-1.186H8.593V3.593Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
