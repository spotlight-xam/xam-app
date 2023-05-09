import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  setState: () => console.warn("Not implemented"),
});

let uuidIndexRef: React.MutableRefObject<number>;
let testServerSocket: WebSocket;

export function TestingGenerateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  uuidIndexRef = useRef(0);
  const [state, setState] = useState<TestingGenerateState>(null);
  const { top } = useSafeAreaInsets();

  return (
    <Context.Provider value={{ state, setState }}>
      <>
        {state && (
          <View
            style={{
              position: "absolute",
              backgroundColor: state.isGenerating ? "red" : "gray",
              zIndex: 1,
              height: top,
              top: 0,
              width: "100%",
              alignItems: "center",
            }}
          />
        )}

        {children}
      </>
    </Context.Provider>
  );
}

export function useTestingGenerate() {
  const { setState } = useContext(Context);

  useEffect(() => {
    testServerSocket = new WebSocket("ws://localhost:9091");

    testServerSocket.addEventListener("open", function () {
      console.log("[Test Generate] Connected test server");
      const createdAt = new Date().toISOString();

      uuidIndexRef.current = 0;
      setState({
        isGenerating: true,
        createdAt,
        version: "1.0.0",
      });
    });

    testServerSocket.addEventListener("message", function (e) {
      const testServerAction = e.data as "start" | "pause" | "end";
      switch (testServerAction) {
        case "start":
          setState((prev) => (prev ? { ...prev, isGenerating: true } : prev));
          break;
        case "pause":
          setState((prev) => (prev ? { ...prev, isGenerating: false } : prev));
          break;
        case "end":
          setState(null);
          break;
      }
    });
    testServerSocket.addEventListener("close", function () {
      setState(null);
    });
    testServerSocket.addEventListener("error", function () {
      setState(null);
    });
  }, []);
}

export function useTestingGenerateGetUuid(type: "press" | "typing") {
  const { state } = useContext(Context);

  const uuid = useMemo(() => {
    const id = `${type}-${uuidIndexRef.current++}`;
    console.log("id : ", id);
    return id;
  }, [state]);

  const record = useCallback(() => {
    if (state?.isGenerating) {
      console.log(`[recode]: ${"action"} | ${uuid}`);
      testServerSocket.send(JSON.stringify({ event: "action", type, uuid }));
    }
  }, [uuid, state?.isGenerating]);

  return [uuid, record] as const;
}
