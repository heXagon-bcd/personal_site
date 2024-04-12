import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom", "react-scroll"],
    alias: {
      "react-scroll": "/node_modules/react-scroll/modules/index.js", // adjust this path based on actual location
    },
  },
});
