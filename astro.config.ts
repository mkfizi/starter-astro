import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: "https://mkfizi.dev",

    // By default, Astro outputs to './dist'. Change this to './docs' to deploy to GitHub Pages.
    outDir: './dist',

    // Set 'enable' to 'false' to disable Astro dev toolbar.
    devToolbar: {
        enabled: false
    },
    data: {
        metadata: {
            title: "Starter Astro",
            description: "Starter boilerplate for Astro projects.",
        }
    },
  integrations: [alpinejs({ entrypoint: '/src/js/alpine.ts' })],
    vite: {
        plugins: [tailwindcss()],
    },
});