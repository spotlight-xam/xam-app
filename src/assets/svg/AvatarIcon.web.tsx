import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const AvatarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.962 4.8c0 1.546-1.326 2.8-2.962 2.8-1.635 0-2.961-1.254-2.961-2.8C5.039 3.254 6.365 2 8 2c1.636 0 2.962 1.254 2.962 2.8ZM10.912 8.976c.918.38 1.743.936 2.423 1.632A.587.587 0 0 1 13.5 11v2.4c0 .16-.067.312-.186.424a.654.654 0 0 1-.449.176h-9.73a.654.654 0 0 1-.446-.173.585.585 0 0 1-.189-.419v-2.4a.586.586 0 0 1 .165-.4 7.268 7.268 0 0 1 2.423-1.632A7.62 7.62 0 0 1 8 8.399a7.62 7.62 0 0 1 2.912.577Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
