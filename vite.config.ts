import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //change config to run the project on port 3000
  server: {
    port: 3000,
  },
});
