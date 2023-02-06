// https://vitest.dev/config/
import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.spec.ts"],
    setupFiles: "setupTests.ts",
  },
}))