import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const ReceiptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 3.714A1.714 1.714 0 0 1 3.714 2h6a1.714 1.714 0 0 1 1.715 1.714v6H14v1.715A2.57 2.57 0 0 1 11.429 14H4.57A2.571 2.571 0 0 1 2 11.429V3.714Zm9.429 6.857v2.572a1.715 1.715 0 0 0 1.714-1.714v-.858h-1.714Zm-.858 2.572V3.714a.857.857 0 0 0-.857-.857h-6a.857.857 0 0 0-.857.857v7.715a1.714 1.714 0 0 0 1.714 1.714h6ZM4.571 5A.429.429 0 0 1 5 4.571h3.429a.429.429 0 1 1 0 .858H5A.429.429 0 0 1 4.571 5Zm0 2.571A.429.429 0 0 1 5 7.143h3.429a.429.429 0 1 1 0 .857H5a.429.429 0 0 1-.429-.429Zm0 2.572A.429.429 0 0 1 5 9.714h1.714a.429.429 0 1 1 0 .857H5a.428.428 0 0 1-.429-.428Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
