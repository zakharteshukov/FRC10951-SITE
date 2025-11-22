import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['.'],
		},
	},
	build: {
		target: 'esnext',
		cssCodeSplit: true,
		sourcemap: false,
		minify: 'esbuild',
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					// Separate vendor chunks
					if (id.includes('node_modules')) {
						if (id.includes('svelte')) {
							return 'vendor-svelte';
						}
						if (id.includes('@sveltejs')) {
							return 'vendor-sveltekit';
						}
						return 'vendor';
					}
				},
			},
		},
		chunkSizeWarningLimit: 1000,
	},
	optimizeDeps: {
		include: ['svelte'],
	},
});
