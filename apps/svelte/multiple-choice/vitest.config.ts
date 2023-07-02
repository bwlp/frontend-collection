// https://vitest.dev/config/
import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    coverage: {
      all: true,
      enabled: true,
      include: ["src/**"],
      extension: ['.svelte']
    },
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.spec.ts"],
    setupFiles: "setupTests.ts",
  },
}))