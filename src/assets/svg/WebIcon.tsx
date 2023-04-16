import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { getSvgDynamicStyle } from "@helpers/common";

export const WebIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M12.5 8A4.5 4.5 0 0 1 8 12.5v1A5.5 5.5 0 0 0 13.5 8h-1ZM8 12.5A4.5 4.5 0 0 1 3.5 8h-1A5.5 5.5 0 0 0 8 13.5v-1ZM3.5 8A4.5 4.5 0 0 1 8 3.5v-1A5.5 5.5 0 0 0 2.5 8h1ZM8 3.5A4.5 4.5 0 0 1 12.5 8h1A5.5 5.5 0 0 0 8 2.5v1ZM3 6.833h10v-1H3v1Zm0 3.334h10v-1H3v1ZM8 3l-.355-.352-.001.001-.003.003a1.12 1.12 0 0 0-.025.027 4.568 4.568 0 0 0-.277.336 6.71 6.71 0 0 0-.62 1.015c-.447.896-.886 2.222-.886 3.97h1c0-1.575.395-2.75.781-3.523.194-.388.386-.676.526-.864a3.577 3.577 0 0 1 .216-.262l-.001.001L8 3ZM5.833 8c0 1.791.438 3.118.888 4.006.224.442.45.774.623.999a4.22 4.22 0 0 0 .31.357L8 13l.345-.362.001.001-.008-.008a3.194 3.194 0 0 1-.203-.239 5.256 5.256 0 0 1-.522-.838c-.384-.759-.78-1.932-.78-3.554h-1ZM8 3l-.355.352-.001-.001a.652.652 0 0 1 .05.056c.038.043.096.112.166.206.14.188.332.476.526.864.386.774.78 1.948.78 3.523h1c0-1.748-.438-3.074-.885-3.97a6.71 6.71 0 0 0-.62-1.015 4.568 4.568 0 0 0-.302-.363l-.003-.003-.001-.001L8 3Zm1.167 5c0 1.622-.396 2.795-.78 3.554-.192.38-.383.66-.522.839a3.194 3.194 0 0 1-.203.238l-.008.008c.001 0 .001-.001.346.361l.345.362.002-.002a2.205 2.205 0 0 0 .094-.098 4.22 4.22 0 0 0 .215-.257c.174-.225.4-.557.623-1 .45-.887.888-2.214.888-4.005h-1Z"
      {...getSvgDynamicStyle(props, { fill: true })}
    />
  </Svg>
);
