import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // Change the host to localhost
    host: 'https://samrath.onrender.com',
  },
  base: "/will-you-be-my-valentine",
  plugins: [react()],
});
