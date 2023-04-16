import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const DotsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.016 4.4c.71 0 1.264-.537 1.264-1.2 0-.663-.554-1.2-1.264-1.2S6.75 2.537 6.75 3.2c0 .663.556 1.2 1.266 1.2ZM8.016 9.2c.71 0 1.264-.537 1.264-1.2 0-.663-.554-1.2-1.264-1.2S6.75 7.337 6.75 8c0 .663.556 1.2 1.266 1.2ZM8.016 14c.71 0 1.264-.537 1.264-1.2 0-.663-.554-1.2-1.264-1.2s-1.266.537-1.266 1.2c0 .663.556 1.2 1.266 1.2Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
