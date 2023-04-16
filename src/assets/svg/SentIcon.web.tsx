import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const SentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.861 3.146a.5.5 0 0 0-.525-.115l-11.013 4a.5.5 0 0 0 0 .935l4.806 1.92 1.922 4.8A.5.5 0 0 0 9.5 15a.501.501 0 0 0 .46-.33l4.006-11a.5.5 0 0 0-.106-.525ZM9.501 13.1 8.105 9.6l2.397-2.395-.705-.705-2.418 2.415L3.895 7.5l8.775-3.165L9.501 13.1Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
