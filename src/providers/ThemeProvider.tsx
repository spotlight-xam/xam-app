import { createContext, useContext, useMemo } from "react";

import { ModeContext, ThemeContext, getGrayColorByMode, themes } from "@theme";

import { useMode } from "./ModeProvider";

const themeContext = createContext<ThemeContext & ModeContext>({
  ...themes.xam,
  mode: "light",
  setMode: () => console.warn("Not implemented"),
});
export const useTheme = () => useContext(themeContext);

type ThemeProviderProps = {
  children: React.ReactNode;
  initTheme: ThemeContext;
};

export function ThemeProvider({ children, initTheme }: ThemeProviderProps) {
  const { mode, setMode } = useMode();
  const theme = useMemo(
    () => ({
      ...initTheme,
      colors: { ...initTheme.colors, gray: getGrayColorByMode(mode) },
    }),
    [mode, initTheme]
  );

  return (
    <themeContext.Provider value={{ ...theme, mode, setMode }}>
      {children}
    </themeContext.Provider>
  );
}
