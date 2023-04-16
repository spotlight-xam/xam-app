import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const InboxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.227 2A1.773 1.773 0 0 1 14 3.773v8.454A1.773 1.773 0 0 1 12.227 14H3.773A1.773 1.773 0 0 1 2 12.227V3.773A1.773 1.773 0 0 1 3.773 2h8.454ZM2.818 12.227c0 .527.428.955.955.955h8.454a.954.954 0 0 0 .955-.955V9.364h-2.9a2.32 2.32 0 0 1-2.165 1.906L8 11.273a2.319 2.319 0 0 1-2.26-1.798l-.022-.111h-2.9v2.863Zm9.41-9.409H3.772a.955.955 0 0 0-.955.955v4.772h3.273a.41.41 0 0 1 .405.354l.004.056a1.5 1.5 0 0 0 3 0 .41.41 0 0 1 .353-.406l.056-.004h3.273V3.773a.954.954 0 0 0-.955-.955Z"
      {...getSvgDynamicStyle(props, { fill: true, stroke: true })}
      strokeWidth={0.2}
    />
  </svg>
);
