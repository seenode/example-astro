// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    // * Enable SSR mode for web service
    output: 'server',

    server: {
        // * Use port 80 in production (requires root/container privileges), port 4321 for development
        port: process.env.NODE_ENV === 'production' ? 80 : 4321
    },

    adapter: node({
        mode: 'standalone'
    })
});