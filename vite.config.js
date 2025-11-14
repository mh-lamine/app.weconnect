import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			manifest: {
				display: 'standalone',
				name: 'WeConnect',
				short_name: 'WeConnect',
				background_color: '#6366f1'
			}
		})
	],
	server: {
		port: 2200
	}
});
