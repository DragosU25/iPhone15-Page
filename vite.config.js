import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/iPhone15-Page/",
  plugins: [
    react(),
    sentryVitePlugin({
      org: "jsm-fh",
      project: "javascript-react",
    }),
  ],
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
