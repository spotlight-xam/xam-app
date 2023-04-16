import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const TelephoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.497 11.181a.532.532 0 0 0-.28-.383L10.963 9.47l-.018-.01a.7.7 0 0 0-.799.126l-.665.665a.39.39 0 0 1-.15.068c-.007 0-.773-.056-2.184-1.466C5.74 7.445 5.68 6.676 5.68 6.676c.001-.039.04-.131.067-.16l.567-.567c.2-.2.26-.532.142-.79L5.202 2.804a.518.518 0 0 0-.464-.303.534.534 0 0 0-.377.162L2.815 4.205a1.184 1.184 0 0 0-.304.612c-.013.1-.288 2.467 2.958 5.713 2.756 2.756 4.905 2.97 5.498 2.97.072 0 .144-.003.216-.011.207-.028.465-.155.612-.303l1.545-1.544a.532.532 0 0 0 .157-.461Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </svg>
);
