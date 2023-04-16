import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const MailUnreadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 6.228V11.5c0 .564.21 1.104.586 1.503.375.398.884.622 1.414.622h8c.53 0 1.04-.224 1.414-.622.375-.399.586-.94.586-1.503V5.125c0-.564-.21-1.104-.586-1.503A1.942 1.942 0 0 0 12 3H4c-.53 0-1.04.224-1.414.622A2.194 2.194 0 0 0 2 5.125v1.103Zm2-2.165h8c.265 0 .52.111.707.31.188.2.293.47.293.752v.786l-5 2.86-5-2.86v-.786c0-.282.105-.552.293-.751A.971.971 0 0 1 4 4.063ZM3 7.117l4.763 2.724a.477.477 0 0 0 .474 0L13 7.118V11.5c0 .282-.105.552-.293.751a.97.97 0 0 1-.707.312H4a.971.971 0 0 1-.707-.312C3.105 12.052 3 11.781 3 11.5V7.118Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
