import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const TrashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 2c-.261 0-.53.092-.719.281A1.016 1.016 0 0 0 6 3v.5H3v1h.5v8c0 .822.678 1.5 1.5 1.5h6c.822 0 1.5-.678 1.5-1.5v-8h.5v-1h-3V3c0-.261-.092-.53-.281-.719A1.017 1.017 0 0 0 9 2H7Zm0 1h2v.5H7V3ZM4.5 4.5h7v8c0 .277-.223.5-.5.5H5a.498.498 0 0 1-.5-.5v-8Zm1 1.5v5.5h1V6h-1Zm2 0v5.5h1V6h-1Zm2 0v5.5h1V6h-1Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
