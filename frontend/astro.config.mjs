// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

// https://astro.build/config
export default defineConfig({
    vite: {
        server: {
            fs: {
                // Allow serving files from the monorepo root node_modules
                allow: [path.resolve('..')]
            }
        },
        assetsInclude: ['**/*.jfif'],
    }
});
