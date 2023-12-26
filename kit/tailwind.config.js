/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte}'],
	theme: {
		extend: {
			colors: {},
			fontFamily: {
				serif: `'Instrument Serif', serif`,
			},
		},
	},
	safelist: ['action'],
	plugins: [],
}
