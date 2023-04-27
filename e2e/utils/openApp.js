module.exports.openApp = async function openApp() {
  const platform = device.getPlatform();

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
  const deepLinkUrl = getDeepLinkUrl(getDevLauncherPackagerUrl(platform));

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

const sleep = (t) => new Promise((res) => setTimeout(res, t));
