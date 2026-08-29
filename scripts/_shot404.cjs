const { chromium } = require('playwright');
const path = require('path');
const out = 'C:/Users/walac/AppData/Local/Temp/claude/c--Users-walac-Downloads-WalaceCosta-portfolio/c9c67c0c-4528-44ee-be04-d90532aece9c/scratchpad';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('http://localhost:5183/404.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(700);
  await page.screenshot({ path: path.join(out, '404-dark.png') });

  await page.evaluate(() => localStorage.setItem('portfolio-theme', 'light'));
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(700);
  await page.screenshot({ path: path.join(out, '404-light.png') });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(700);
  await page.screenshot({ path: path.join(out, '404-mobile.png') });

  await browser.close();
})();
