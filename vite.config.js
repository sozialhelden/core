import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

import packageJson from "./package.json";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "~": resolve(__dirname),
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
    svgr({
      svgrOptions: {
        ref: true,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  removeViewBox: false,
                  removeUselessStrokeAndFill: false,
                },
              },
            },
          ],
        },
      },
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      fileName: "index",
      name: packageJson.name,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ["react"],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: "react",
        },
      },
    },
  },
});
