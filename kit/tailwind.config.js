/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte}'],
	theme: {
		extend: {
			colors: {
				blue: '#32909c',
				orange: '#d7723e',
			},
			fontFamily: {
				serif: `'Instrument Serif', serif`,
			},
			minHeight: {
				xsvh: 'calc(100svh - var(--footer-height))',
			},
		},
	},
	safelist: ['action'],
	plugins: [],
}
