import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@services': fileURLToPath(
                new URL('./src/services', import.meta.url)
            ),
            '@components': fileURLToPath(
                new URL('./src/components', import.meta.url)
            ),
        },
    },
});
