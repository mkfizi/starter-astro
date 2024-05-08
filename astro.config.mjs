import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    /**
     * Output path to accomodate deployment on Github Pages using 'docs` branch.
     * Update 'prebuild' script in `package.json if this value is changed 
     */
    outDir: './docs',

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
    integrations: [tailwind()]
});