import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const ImageFileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 4.045A2.045 2.045 0 0 1 4.045 2h7.91A2.046 2.046 0 0 1 14 4.045v7.91A2.046 2.046 0 0 1 11.954 14H4.045A2.045 2.045 0 0 1 2 11.954V4.045Zm2.045-1.227a1.227 1.227 0 0 0-1.227 1.227v7.91c0 .197.047.383.129.548l4.29-4.194a1.09 1.09 0 0 1 1.526 0l4.29 4.194c.085-.17.129-.358.129-.549V4.045a1.227 1.227 0 0 0-1.228-1.227H4.045Zm8.419 10.253L8.191 8.895a.273.273 0 0 0-.381 0L3.536 13.07c.155.071.328.11.51.11h7.91c.18 0 .353-.039.508-.11Zm-2.01-6.707a.545.545 0 1 1 0-1.09.545.545 0 0 1 0 1.09Zm0 .818a1.364 1.364 0 1 0 0-2.728 1.364 1.364 0 0 0 0 2.728Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
