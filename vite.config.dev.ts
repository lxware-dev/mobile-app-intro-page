import { defineConfig } from "vite";
import { sharedPluginsConfig } from "./src/vite/shared-plugin-config";

export default defineConfig({
  plugins: [...sharedPluginsConfig],
});
