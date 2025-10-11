// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    // * Enable SSR mode for web service
    output: 'server',

    adapter: node({
        mode: 'standalone'
    })
});