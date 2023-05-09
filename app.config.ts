import { ConfigContext, ExpoConfig } from "@expo/config";

const APP_VARIANT: "production" | "dev" | "stage" | "local" =
  (process.env as any).APP_VARIANT || "production";

export default ({ config }: ConfigContext): ExpoConfig => {
  const appName = {
    local: "Xam (local)",
    dev: "Xam (dev)",
    stage: "Xam (stage)",
    production: "Xam",
  };

  const bundleIdentifier = {
    local: "com.outsung.xam.local",
    dev: "com.outsung.xam.dev",
    stage: "com.outsung.xam.stage",
    production: "com.outsung.xam",
  };

  const scheme = {
    local: "xam-local",
    dev: "xam-dev",
    stage: "xam-stage",
    production: "xam",
  };

  const expoProjectId = "857462cb-9736-4060-8573-b6eab99f0e99";

  const version = "1.0.3";
  const buildNumber = 4;

  return {
    ...config,
    name: appName[APP_VARIANT],
    slug: "xam",
    scheme: scheme[APP_VARIANT],
    version,
    owner: "spotlight-xam",
    runtimeVersion: version,
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    extra: { eas: { projectId: expoProjectId } },
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    updates: {
      url: `https://u.expo.dev/${expoProjectId}`,
      checkAutomatically: "ON_LOAD",
    },
    ios: {
      bundleIdentifier: bundleIdentifier[APP_VARIANT],
      supportsTablet: true,
      buildNumber: String(buildNumber),
      config: { usesNonExemptEncryption: false },
    },
    android: {
      package: bundleIdentifier[APP_VARIANT],
      versionCode: buildNumber,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon-1.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      ["@config-plugins/detox"],
      ["expo-updates", { username: "outsung" }],
      [
        "expo-dynamic-app-icon",
        {
          bee: {
            image: "./assets/adaptive-icon-2.png",
            prerendered: true,
          },
          honey: {
            image: "./assets/adaptive-icon-1.png",
            prerendered: true,
          },
        },
      ],
    ],
  };
};
