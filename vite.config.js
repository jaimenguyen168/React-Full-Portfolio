import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as dotenv from "dotenv";

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.gltf", "**/*.glb"],
  define: {
    // eslint-disable-next-line no-undef
    "process.env": process.env,
  },
});
