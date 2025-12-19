import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: 'rna13P9PJDy88JBSOqcojwtt',
      components: {
        "page": "components/Page.astro",
        "name_block": "components/NameBlock.astro",
        "stats_card": "components/StatsCard.astro",
        "user_table": "components/UserTable.astro",
        "user_row": "components/UserRow.astro",
        "settings_card": "components/SettingsCard.astro"
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});