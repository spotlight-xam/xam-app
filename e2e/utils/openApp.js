const appConfig = require("../../app.config");
const { resolveConfig } = require("detox/internals");

const platform = device.getPlatform();

module.exports.openApp = async function openApp() {
  // const config = await resolveConfig();
  // const isDebug = config.configurationName.split(".")[1] === "debug";
  const isDebug = true;

  if (isDebug) {
    console.log("[openApp]: debug");
    return await openAppForDebugBuild(platform);
  } else {
    console.log("[openApp]: release");
    return await device.launchApp({
      newInstance: true,
    });
  }
};

async function openAppForDebugBuild(platform) {
  const deepLinkUrl = process.env.EXPO_USE_UPDATES
    ? // Testing latest published EAS update for the test_debug channel
      getDeepLinkUrl(getLatestUpdateUrl())
    : // Local testing with packager
      getDeepLinkUrl(getDevLauncherPackagerUrl(platform));

  if (platform === "ios") {
    await device.launchApp({
      newInstance: true,
    });
    sleep(3000);
    await device.openURL({
      url: deepLinkUrl,
    });
  } else {
    await device.launchApp({
      newInstance: true,
      url: deepLinkUrl,
    });
  }

  await sleep(3000);
}

const getDeepLinkUrl = (url) =>
  `exp+xam://expo-development-client/?url=${encodeURIComponent(url)}`;

const getDevLauncherPackagerUrl = (platform) => {
  // return `http://localhost:8081/index.bundle?platform=${platform}&dev=true&minify=false&disableOnboarding=1`;
  return `http://localhost:8081?disableOnboarding=1`;
};

const getLatestUpdateUrl = () =>
  `https://u.expo.dev/${getAppId()}?channel-name=test_debug&disableOnboarding=1`;

const getAppId = () => appConfig?.expo?.extra?.eas?.projectId ?? "";

const sleep = (t) => new Promise((res) => setTimeout(res, t));
