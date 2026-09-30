const { chromium } = require('@playwright/test');
(async () => {
  try {
    const browser = await chromium.launch({ channel: 'chrome', headless: true });
    console.log('LAUNCHED');
    await browser.close();
    process.exit(0);
  } catch (e) {
    console.error('ERROR:', e.message);
    process.exit(1);
  }
})();
