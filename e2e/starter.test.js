const { openApp } = require("./utils/openApp");

describe("Home screen", () => {
  beforeAll(async () => {
    await openApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('"StoreListScreen" button should be visible', async () => {
    await expect(element(by.id("move-StoreListScreen"))).toBeVisible();
  });

  it('shows "StoreLabel" after tapping "move-StoreListScreen"', async () => {
    await element(by.id("move-StoreListScreen")).tap();
    await expect(element(by.label("StoreLabel"))).toBeVisible();
  });
});
