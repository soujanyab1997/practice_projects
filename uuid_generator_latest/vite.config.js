import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.js", // The entry point of the library
      name: "uuidlibrary", // Global name of the library
      fileName: "sha256-uuid-library",
    },
    rollupOptions: {
      // Externalize dependencies to not bundle them
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
