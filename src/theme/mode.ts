import { colors } from "./colors";
import { ThemeContext } from "./types";

export type Mode = "dark" | "light";

export type ModeContext = {
  mode: Mode;
  setMode: (mode: Mode) => void;
};

export function getGrayColorByMode(mode: Mode): ThemeContext["colors"]["gray"] {
  if (mode === "dark") {
    return {
      "accents-1": colors.gray.dark,
      "accents-2": colors.gray.strong3,
      "accents-3": colors.gray.strong2,
      "accents-4": colors.gray.strong1,
      "accents-5": colors.gray.origin2,
      "accents-6": colors.gray.origin1,
      "accents-7": colors.gray.light2,
      "accents-8": colors.gray.light1,
      background: colors.black,
      foreground: colors.white,
    };
  } else {
    return {
      "accents-1": colors.gray.light1,
      "accents-2": colors.gray.light2,
      "accents-3": colors.gray.origin1,
      "accents-4": colors.gray.origin2,
      "accents-5": colors.gray.strong1,
      "accents-6": colors.gray.strong2,
      "accents-7": colors.gray.strong3,
      "accents-8": colors.gray.dark,
      background: colors.white,
      foreground: colors.black,
    };
  }
}
