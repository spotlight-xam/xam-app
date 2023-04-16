import { colors } from "./colors";
import { ThemeContext } from "./types";

const xam: ThemeContext = {
  borderRadius: 5,
  colors: { ...colors, primary: colors.crimson },
};

export const themes = { xam };
