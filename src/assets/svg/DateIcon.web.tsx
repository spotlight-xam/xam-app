import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const DateIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 9a.484.484 0 0 1-.356-.144A.483.483 0 0 1 5.5 8.5c0-.142.048-.26.144-.357A.485.485 0 0 1 6 8c.142 0 .26.048.356.143A.485.485 0 0 1 6.5 8.5c0 .142-.048.26-.144.356A.484.484 0 0 1 6 9Zm2 0a.483.483 0 0 1-.356-.144A.483.483 0 0 1 7.5 8.5c0-.142.048-.26.144-.357A.483.483 0 0 1 8 8c.142 0 .26.048.357.143A.485.485 0 0 1 8.5 8.5c0 .142-.048.26-.143.356A.484.484 0 0 1 8 9Zm2 0a.483.483 0 0 1-.356-.144A.483.483 0 0 1 9.5 8.5c0-.142.048-.26.144-.357A.483.483 0 0 1 10 8c.142 0 .26.048.356.143a.484.484 0 0 1 .144.357c0 .142-.048.26-.144.356A.483.483 0 0 1 10 9Zm-5.5 4a.964.964 0 0 1-.707-.293A.964.964 0 0 1 3.5 12V5c0-.275.098-.51.293-.706A.963.963 0 0 1 4.5 4H5v-.513c0-.141.048-.258.144-.35A.496.496 0 0 1 5.5 3c.142 0 .26.048.356.143A.485.485 0 0 1 6 3.5V4h4v-.513c0-.141.048-.258.144-.35A.495.495 0 0 1 10.5 3c.142 0 .26.048.356.143A.484.484 0 0 1 11 3.5V4h.5c.275 0 .51.098.707.294A.962.962 0 0 1 12.5 5v7c0 .275-.098.51-.293.707A.964.964 0 0 1 11.5 13h-7Zm0-1h7V7h-7v5Zm0-6h7V5h-7v1Zm0 0V5v1Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
