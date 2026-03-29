// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://agilsosa.github.io",
  base: "/portfolio",
  fonts: [
    {
      name: "Lilex",
      cssVariable: "--font-lilex",
      provider: fontProviders.fontsource(),
      weights: ["400", "700"],
    },
  ],
});
