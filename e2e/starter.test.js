describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have toggle button', async () => {
    const button = element(by.id('toggleButton'));

    await expect(button).toBeVisible();
    await expect(button).toHaveLabel('TOGGLE FALSE');
  });

  it('should toggle text', async () => {
    const button = element(by.id('toggleButton'));
    await button.tap();
    await expect(button).toHaveLabel('TOGGLE TRUE');
  });
});
