import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "", // 🔥 removes leading slash in build output
  plugins: [react()],
});
