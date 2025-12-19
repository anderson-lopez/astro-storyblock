import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro'; // 1. Importar la integración

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: 'rna13P9PJDy88JBSOqcojwtt',
      components: {
        "page": "components/Page.astro",
        "name_block": "components/NameBlock.astro",
        "stats_card": "components/StatsCard.astro",
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});