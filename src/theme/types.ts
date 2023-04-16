import { colors } from "./colors";

export type ThemeContext = {
  borderRadius: number;
  colors: {
    primary: {
      origin: string;
      dark: string;
      light: string;
      bright: string;
      soft: string;
    };
  } & typeof colors;
};
