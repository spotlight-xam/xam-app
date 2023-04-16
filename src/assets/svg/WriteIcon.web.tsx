import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const WriteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m11.667 7.083-5.402 5.402a.5.5 0 0 1-.233.132l-2.724.68a.5.5 0 0 1-.606-.606l.681-2.723a.5.5 0 0 1 .132-.233l5.402-5.402m2.75 2.75-2.75-2.75m2.75 2.75 1.48-1.48a.5.5 0 0 0 0-.707l-2.043-2.042a.5.5 0 0 0-.708 0l-1.48 1.48"
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeWidth={1.3}
    />
  </svg>
);
