import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 5.18a3.18 3.18 0 0 1-.938 2.258l-1.735 1.736a3.186 3.186 0 0 1-4.506 0 .49.49 0 1 1 .693-.693 2.212 2.212 0 0 0 3.12 0l1.735-1.737a2.209 2.209 0 1 0-3.12-3.123L8.035 4.836a.49.49 0 0 1-.693-.693l1.214-1.215A3.193 3.193 0 0 1 14 5.18Zm-5.965 5.902-1.214 1.215a2.205 2.205 0 0 1-3.733-1.571A2.21 2.21 0 0 1 3.7 9.174l1.735-1.736a2.212 2.212 0 0 1 3.12 0 .49.49 0 0 0 .693-.694 3.186 3.186 0 0 0-4.506 0L3.008 8.481a3.19 3.19 0 0 0 3.471 5.245c.391-.173.743-.423 1.035-.735l1.214-1.215a.491.491 0 0 0-.693-.694Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
