// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    // * Enable SSR mode for web service
    output: 'server',

    adapter: node({
        mode: 'standalone'
    }),

    server: {
        // * Use port 80 in production (requires root/container privileges), port 4321 for development
        port: process.env.NODE_ENV === 'production' ? 80 : 4321,
        host: true // * Bind to 0.0.0.0 for container networking
    }
});