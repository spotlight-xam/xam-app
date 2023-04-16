import { createContext, useContext } from "react";

import { ThemeContext, themes } from "@theme";

const Context = createContext<ThemeContext>(themes.xam);
export const useTheme = () => useContext(Context);

type ThemeProviderProps = {
  children: React.ReactNode;
  theme: ThemeContext;
};

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  return <Context.Provider value={theme}>{children}</Context.Provider>;
}
