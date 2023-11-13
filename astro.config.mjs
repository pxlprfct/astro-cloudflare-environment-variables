import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  // NOTE: no combination of options here gets runtime.env to work
  adapter: cloudflare()
});
