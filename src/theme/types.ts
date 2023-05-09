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
    gray: {
      foreground: string;
      "accents-1": string;
      "accents-2": string;
      "accents-3": string;
      "accents-4": string;
      "accents-5": string;
      "accents-6": string;
      "accents-7": string;
      "accents-8": string;
      background: string;
    };
  } & Omit<typeof colors, "gray">;
};
