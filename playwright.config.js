// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const REMOTE_BASE_URL = process.env.PW_BASE_URL;

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 0,
  reporter: [['list']],
  webServer: REMOTE_BASE_URL ? undefined : {
    command: 'npx http-server -p 8123 -c-1 .',
    port: 8123,
    reuseExistingServer: false,
    timeout: 30000,
  },
  use: {
    baseURL: REMOTE_BASE_URL || 'http://localhost:8123',
  },
  projects: [
    {
      name: 'desktop-chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 7'] },
    },
  ],
});
