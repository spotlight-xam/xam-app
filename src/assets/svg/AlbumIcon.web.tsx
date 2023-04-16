import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const AlbumIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m6.918 8.212-.751-1.117L4.7 9.277h6.6L8.733 5.64 6.918 8.212ZM5.802 6.368c.609 0 1.102-.49 1.102-1.093 0-.604-.493-1.093-1.102-1.093-.609 0-1.102.49-1.102 1.093 0 .604.493 1.093 1.102 1.093Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.15 11.818a.548.548 0 0 0-.55.546c0 .3.246.545.55.545h9.35V14H4.15c-.911 0-1.65-.733-1.65-1.636V3.09C2.5 2.488 2.992 2 3.6 2h8.8c.607 0 1.1.488 1.1 1.09v8.728H4.15ZM3.6 3.091h8.8v7.636H3.6V3.091Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
