import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: "gzip" }),
    compression({ algorithm: "brotliCompress" }),
  ],
  build: {
    target: "esnext",
    minify: "esbuild",
    modulePreload: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
