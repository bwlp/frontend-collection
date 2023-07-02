import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      exclude: ['App.tsx', '**/__tests__/**'],
    },
    environment: 'jsdom',
    globals: true,
    include: ['**/__tests__/*.{ts,tsx}'],
    setupFiles: 'src/setupTests.ts',
  },
});
