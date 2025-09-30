// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        // * Use port 80 in production (requires root/container privileges), port 4321 for development
        port: process.env.NODE_ENV === 'production' ? 80 : 4321
    }
});
