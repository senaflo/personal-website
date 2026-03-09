import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ablasberg9.github.io',
  base: '/personal-website/',
  vite: {
    plugins: [tailwindcss()],
  },
});
