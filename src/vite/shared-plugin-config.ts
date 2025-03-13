import { presetIcons, presetWind3 } from "unocss";
import UnoCSS from "unocss/vite";

export const sharedPluginsConfig = [
  UnoCSS({
    mode: "shadow-dom",
    presets: [presetWind3(), presetIcons()],
  }),
];
