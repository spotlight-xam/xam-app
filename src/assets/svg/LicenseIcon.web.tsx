import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const LicenseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.723 6.162c0 .938-.768 1.706-1.723 1.706a1.714 1.714 0 0 1-1.723-1.706c0-.938.768-1.705 1.723-1.705.956 0 1.723.767 1.723 1.705Z"
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeWidth={1.1}
    />
    <path
      d="M12.45 6.162c0 2.433-1.988 4.413-4.45 4.413s-4.45-1.98-4.45-4.413C3.55 3.73 5.538 1.75 8 1.75s4.45 1.98 4.45 4.412Z"
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeWidth={1.1}
    />
    <path
      d="M4.818 9.32v4.511L8 12.329l3.182 1.504V9.32"
      {...getSvgDynamicStyle(props, { stroke: true })}
      strokeWidth={1.1}
    />
  </svg>
);
