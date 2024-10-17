import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://felixselter.github.io/JGUStep2024/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
