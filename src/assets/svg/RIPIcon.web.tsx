import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const RIPIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.04 11.839c-.459-.637-1.727-2.316-2.768-3.699.421-.605.758-1.099.911-1.358.936-1.57.53-2.58.014-3.434C9.679 2.494 9.597 2 8.058 2c-1.54 0-1.622.494-2.139 1.349-.517.854-.923 1.863.013 3.434.154.258.49.753.912 1.358-1.041 1.382-2.31 3.062-2.768 3.698-.107.148-.097.402.005.656.079.195.382 1.067.456 1.25.094.235.402.405.655.055.146-.202 1.564-2.135 2.866-3.95 1.302 1.815 2.72 3.748 2.866 3.95.253.35.561.18.655-.055.074-.184.377-1.055.456-1.25.101-.254.111-.509.005-.656ZM7.836 6.22c-.646-.899-1.11-1.945-1.11-1.945s.255-.459 1.332-.459 1.331.46 1.331.46-.464 1.045-1.11 1.944l-.22.301c-.076-.1-.15-.2-.223-.301Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
