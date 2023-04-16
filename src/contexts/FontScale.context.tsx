import { createContext, useContext } from "react";

const DEFAULT_FONT_SCALE = 1;

export const FontScaleContext = createContext(DEFAULT_FONT_SCALE);

export function FontScaleContextProvider({
  value,
  children,
}: {
  value?: number;
  children: React.ReactNode;
}) {
  return (
    <FontScaleContext.Provider value={value ?? DEFAULT_FONT_SCALE}>
      {children}
    </FontScaleContext.Provider>
  );
}

export function useFontScaleContext(): number {
  return useContext(FontScaleContext);
}
