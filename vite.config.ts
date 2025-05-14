import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "/src/assets/scss/variables.scss" as *;
        @use "/src/assets/scss/mixins.scss" as *;
        `,
      },
    },
  },
});
