import { createContext, useContext, useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { v4 } from "uuid";

import { Text } from "@components/common";

import { useTheme } from "./ThemeProvider";

type TestingGenerateState = {
  isGenerating: boolean;
  createdAt: string;
  version: string;
} | null;

interface TestingGenerateContext {
  state: TestingGenerateState;
  setState: React.Dispatch<React.SetStateAction<TestingGenerateState>>;
}

const Context = createContext<TestingGenerateContext>({
  state: null,
  setState: () => console.log("Not implemented"),
});

let uuidIndexRef: React.MutableRefObject<number>;

export function TestingGenerateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  uuidIndexRef = useRef(0);
  const [state, setState] = useState<TestingGenerateState>(null);
  const { top } = useSafeAreaInsets();
  const { colors } = useTheme();

  return (
    <Context.Provider value={{ state, setState }}>
      <>
        {state && state.isGenerating && (
          <View
            style={{
              position: "absolute",
              backgroundColor: "red",
              zIndex: 1,
              height: top,
              top: 0,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text color={colors.white} fontStyle="xSmall">
              테스트를 위한 녹화중 입니다.
            </Text>
          </View>
        )}

        {children}
      </>
    </Context.Provider>
  );
}

export function useTestingGenerate() {
  const { setState } = useContext(Context);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:9091");

    socket.onopen = (e) => {
      console.log("onopen : " + JSON.stringify(e));
      const createdAt = new Date().toISOString();
      // state.isGenerating;

      uuidIndexRef.current = 0;
      setState({
        isGenerating: false,
        createdAt,
        version: "1.0.0",
      });
    };
    socket.onmessage = (e) => {
      console.log("onmessage : " + JSON.stringify(e));
    };
    socket.onerror = (e) => {
      console.log("onerror : " + JSON.stringify(e));
    };
  }, []);
}

export function useTestingGenerateGetUuid() {
  const { state } = useContext(Context);
  const [uuid, setUuid] = useState<string>();

  useEffect(() => {
    if (state && state.isGenerating) {
      const uuidIndex = uuidIndexRef.current;
      uuidIndexRef.current = uuidIndex + 1;
      // v5(String(uuidIndex), state.createdAt)
      setUuid(String(uuidIndex));
    } else {
      setUuid(undefined);
    }
  }, [state]);

  return uuid;
}
