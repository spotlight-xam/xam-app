import * as React from "react";
import { SVGProps } from "react";

import { getSvgDynamicStyle } from "@helpers/common";

export const VoteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.625 7.143h-.951l1.299-2.572c.1-.196.126-.43.075-.65a.852.852 0 0 0-.35-.52L8.75 2.115a.669.669 0 0 0-.57-.086.772.772 0 0 0-.454.4L5.85 6.14a.96.96 0 0 0 .092 1.003h-.568c-.1 0-.195.045-.265.125s-.11.19-.11.303c0 .114.04.223.11.303.07.08.166.126.265.126h5.25c.1 0 .195-.045.265-.126.07-.08.11-.189.11-.303a.462.462 0 0 0-.11-.303.353.353 0 0 0-.265-.125Zm-2.25-4.286 1.948 1.286-1.514 3H7.37l-.87-.574 1.875-3.712Z"
      {...getSvgDynamicStyle(props, { fill: true })}
      fillRule="evenodd"
      clipRule="evenodd"
    />
    <path
      d="m11.403 5.429-.433.857h.405l1.688 2.571H2.937l1.688-2.571h.304c.016-.05.036-.1.059-.146l.36-.711h-.723a.675.675 0 0 0-.335.09.784.784 0 0 0-.265.252L2.15 8.628a.94.94 0 0 0-.15.515v4c0 .227.079.445.22.606.14.16.331.251.53.251h10.5c.199 0 .39-.09.53-.251.141-.16.22-.379.22-.606v-4a.94.94 0 0 0-.15-.515l-1.875-2.857a.787.787 0 0 0-.252-.245.678.678 0 0 0-.32-.097Zm1.847 7.714H2.75V9.714h10.5v3.429Z"
      {...getSvgDynamicStyle(props, { fill: true })}
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);
