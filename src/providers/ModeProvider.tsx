import { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";

import { useGlobalState } from "@hooks/queries/common";
import { ModeContext, Mode } from "@theme";

const modeContext = createContext<ModeContext>({
  mode: "dark",
  setMode: () => console.warn("Not implemented"),
});
export const useMode = () => useContext(modeContext);

type ModeProviderProps = {
  children: React.ReactNode;
};

export function ModeProvider({ children }: ModeProviderProps) {
  const systemMode = useColorScheme();
  const [mode, setMode] = useGlobalState<Mode | null>(["mode"], null);

  console.log("systemMode", systemMode);

  return (
    <modeContext.Provider
      value={{ mode: mode || systemMode || "light", setMode }}
    >
      {children}
    </modeContext.Provider>
  );
}
