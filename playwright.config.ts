import { defineConfig } from '@playwright/test';

const externalUrl = process.env.HOMEPAGE_TEST_URL;
const baseURL = externalUrl ?? 'http://127.0.0.1:4176';

export default defineConfig({
  testDir: './tests/integration',
  outputDir: './artifacts/test-results',
  fullyParallel: false,
  workers: process.env.CI ? 2 : 1,
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  reporter: [['line']],
  use: {
    baseURL,
    channel: process.env.CI ? 'chrome' : 'msedge',
    viewport: { width: 1600, height: 900 },
    testIdAttribute: 'data-automation-id',
    reducedMotion: 'reduce',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: externalUrl
    ? undefined
    : {
        command:
          'npm run build && wrangler dev --local --ip 127.0.0.1 --port 4176 --inspector-port 0',
        url: baseURL,
        reuseExistingServer: false,
        timeout: 120_000,
      },
});
