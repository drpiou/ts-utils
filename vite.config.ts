import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'ts-utils',
      fileName: 'ts-utils',
    },
  },
  test: {
    //
  },
});
