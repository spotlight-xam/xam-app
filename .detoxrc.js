/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: "jest",
      config: "e2e/jest.config.js",
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  apps: {
    ios: {
      type: "ios.app",
      binaryPath: "e2e/dev-client/xam.app",
    },
    android: {
      type: "android.apk",
      binaryPath: "e2e/dev-client/xam.apk",
      testBinaryPath: "e2e/dev-client/xam.apk",
    },
  },
  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: "iPhone 14 Pro Max",
      },
    },
    attached: {
      type: "android.attached",
      device: {
        adbName: ".*",
      },
    },
    emulator: {
      type: "android.emulator",
      device: {
        avdName: "Pixel_2_API_31_2",
      },
    },
  },
  configurations: {
    ios: {
      device: "simulator",
      app: "ios",
    },
    android: {
      device: "emulator",
      app: "android",
    },
  },
};
