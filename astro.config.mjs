// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        // * Use port 80 only in production, port 3000 for development
        port: process.env.NODE_ENV === 'production' ? 80 : 3000
    }
});
