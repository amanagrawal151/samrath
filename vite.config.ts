import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // Change the host to localhost
    host: 'localhost',
  },
  plugins: [react()],
});
