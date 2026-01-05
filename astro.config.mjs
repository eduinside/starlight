// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'byeduin VIVES',
			sidebar: [
				{
					label: 'App',
					autogenerate: { directory: 'app' },
				},
			],
		}),
	],
});
