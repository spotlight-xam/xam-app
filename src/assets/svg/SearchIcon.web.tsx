import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m13.92 13.902.004-.004c.2-.229.204-.602-.004-.81l-3.368-3.363a4.782 4.782 0 0 0 1.037-2.976c0-2.669-2.185-4.824-4.832-4.824S1.925 4.08 1.925 6.749a4.823 4.823 0 0 0 4.832 4.825 4.8 4.8 0 0 0 2.98-1.036l3.369 3.364c.114.114.26.173.407.173a.575.575 0 0 0 .407-.173Zm-7.163-3.489a3.658 3.658 0 0 1-3.67-3.664 3.658 3.658 0 0 1 3.67-3.663 3.675 3.675 0 0 1 3.67 3.663 3.675 3.675 0 0 1-3.67 3.664Z"
      {...getSvgDynamicStyle(props, { fill: true, stroke: true })}
      strokeWidth={0.15}
    />
  </svg>
);
