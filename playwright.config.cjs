/* eslint-disable no-undef */
const { defineConfig, devices } = require('@playwright/test');

const port = 3001;

module.exports = defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    trace: 'on-first-retry',
  },
  projects: [
    /* Test against desktop viewports. */
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    port,
    command: 'npm run build && npm run preview',
    reuseExistingServer: false,
  },
});
