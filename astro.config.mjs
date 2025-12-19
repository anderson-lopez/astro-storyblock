import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro'; // 1. Importar la integración

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: 'rna13P9PJDy88JBSOqcojwtt',
      components: {
        "page": "components/Page.astro",
        "name_block": "components/NameBlock.astro",
      },
    }),
  ],
});