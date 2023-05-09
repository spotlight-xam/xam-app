import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { StatusBar } from "expo-status-bar";
import { Platform, UIManager } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { SplashScreen } from "@components/app";
import { AppNavigation } from "@navigation/App.navigation";
import {
  ModeProvider,
  TestingGenerateProvider,
  ThemeProvider,
} from "@providers";
import { queryClient, queryClientPersister } from "@queryClient/index";
import { themes } from "@theme";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
  return (
    <SplashScreen>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{
          persister: queryClientPersister,
          dehydrateOptions: {
            shouldDehydrateQuery: (query) => {
              return (
                query.state.status === "success" &&
                query.queryKey.length > 0 &&
                typeof query.queryKey[0] === "string" &&
                query.queryKey[0] === "persist"
              );
            },
          },
        }}
      >
        <SafeAreaProvider>
          <ModeProvider>
            <ThemeProvider initTheme={themes.xam}>
              <TestingGenerateProvider>
                <StatusBar />
                <AppNavigation />
              </TestingGenerateProvider>
            </ThemeProvider>
          </ModeProvider>
        </SafeAreaProvider>
      </PersistQueryClientProvider>
    </SplashScreen>
  );
}
