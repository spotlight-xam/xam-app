const { openApp } = require("../utils/openApp");

describe("Home screen", () => {
  beforeAll(async () => {
    await openApp();
    await device.reloadReactNative();
  });

  it("e2e testing", async () => {
    await expect(element(by.id("press-0"))).toBeVisible();
    await element(by.id("press-0")).tap();

    await expect(element(by.id("typing-2"))).toBeVisible();
    await element(by.id("typing-2")).typeText('test');

    await expect(element(by.id("typing-3"))).toBeVisible();
    await element(by.id("typing-3")).typeText('test');

    await expect(element(by.id("press-4"))).toBeVisible();
    await element(by.id("press-4")).tap();

    await expect(element(by.id("press-5"))).toBeVisible();
    await element(by.id("press-5")).tap();

    await expect(element(by.id("press-7"))).toBeVisible();
    await element(by.id("press-7")).tap();

    await expect(element(by.id("press-8"))).toBeVisible();
    await element(by.id("press-8")).tap();

    await expect(element(by.id("press-7"))).toBeVisible();
    await element(by.id("press-7")).tap();

    await expect(element(by.id("press-11"))).toBeVisible();
    await element(by.id("press-11")).tap();

    await expect(element(by.id("press-6"))).toBeVisible();
    await element(by.id("press-6")).tap();

    await expect(element(by.id("press-5"))).toBeVisible();
    await element(by.id("press-5")).tap();

    await expect(element(by.id("press-7"))).toBeVisible();
    await element(by.id("press-7")).tap();

    await expect(element(by.id("press-12"))).toBeVisible();
    await element(by.id("press-12")).tap();

  });
});
