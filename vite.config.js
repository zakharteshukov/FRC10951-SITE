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
					// Separate vendor chunks for better caching
					if (id.includes('node_modules')) {
						if (id.includes('svelte')) {
							return 'vendor-svelte';
						}
						if (id.includes('@sveltejs')) {
							return 'vendor-sveltekit';
						}
						// Separate markdown processing libraries
						if (id.includes('remark') || id.includes('gray-matter') || id.includes('yaml')) {
							return 'vendor-markdown';
						}
						return 'vendor';
					}
				},
			},
		},
		chunkSizeWarningLimit: 1000,
		// Enable compression
		reportCompressedSize: true,
	},
	optimizeDeps: {
		include: ['svelte'],
	},
});
