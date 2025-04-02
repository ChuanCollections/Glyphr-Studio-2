/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		outDir: '../dist/',
		manifest: false,
		emptyOutDir: true,
		chunkSizeWarningLimit: 3000,
		rollupOptions: {
			treeshake: 'recommended',
		},
	},
	server: {
		port: Number(process.env.PORT) || 3000,
	}
});
