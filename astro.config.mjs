import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://your-site-url.com', // Add your site URL here
  integrations: [
    [react()],
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});