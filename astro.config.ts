import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    // Site metadata.
    site: "https://mkfizi.dev",

    // By default, Astro outputs to './dist'. Change this to './docs' to deploy to GitHub Pages.
    outDir: './dist',

    // Set 'enable' to 'false' to disable Astro dev toolbar.
    devToolbar: {
        enabled: false,
    },

    // Markdown configuration.
    markdown: {
        shikiConfig: {
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            },
            wrap: true,
        },
    },
    
    // Integrations and Vite plugins.
    integrations: [alpinejs({ entrypoint: '/src/js/alpine.ts' })],
    vite: {
        plugins: [tailwindcss()],
    },
});