import { colors } from "./colors";
import { getGrayColorByMode } from "./mode";
import { ThemeContext } from "./types";

const xam: ThemeContext = {
  borderRadius: 30,
  colors: {
    ...colors,
    primary: colors.orange,
    gray: getGrayColorByMode("light"),
  },
};

export const themes = { xam };
