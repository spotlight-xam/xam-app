import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const RefreshIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.25 2.583h-6.5c-1.197 0-2.167.97-2.167 2.167v6.5c0 1.197.97 2.167 2.167 2.167h6.5c1.197 0 2.167-.97 2.167-2.167v-6.5c0-1.197-.97-2.167-2.167-2.167ZM4.75 1.5A3.25 3.25 0 0 0 1.5 4.75v6.5a3.25 3.25 0 0 0 3.25 3.25h6.5a3.25 3.25 0 0 0 3.25-3.25v-6.5a3.25 3.25 0 0 0-3.25-3.25h-6.5Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.264 4.533h2.203v.975H10.41a3.467 3.467 0 1 1-3.47-.81l.208-.066.294.93-.206.066a2.492 2.492 0 1 0 2.605.694v.812h-.975V4.93l.397-.398Zm1.352 2.768Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
