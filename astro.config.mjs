// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/ai-course-site',
	integrations: [
		starlight({
			title: 'AI for Management & Research',
			customCss: ['./src/styles/custom.css'],
			// Pagefind search is enabled by default with Starlight
			head: [
				// GoatCounter analytics script
				// Replace YOUR_GOATCOUNTER_CODE with your actual site code
				{
					tag: 'script',
					attrs: {
						'data-goatcounter': 'https://YOUR_GOATCOUNTER_CODE.goatcounter.com/count',
						async: true,
						src: '//gc.zgo.at/count.js',
					},
				},
				// giscus comments (disabled for now - add here if enabled later)
				// To enable: configure giscus app and add script tag here
			],
			sidebar: [
				{
					label: 'Foundation',
					items: [{ autogenerate: { directory: 'foundation' } }],
				},
				{
					label: 'Research Track',
					items: [{ autogenerate: { directory: 'research' } }],
				},
				{
					label: 'Management Track',
					items: [{ autogenerate: { directory: 'management' } }],
				},
				{ label: 'Toolkit', link: '/toolkit/' },
				{ label: 'Library', link: '/library/' },
			],
		}),
	],
});
