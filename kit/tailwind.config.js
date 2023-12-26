/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte}'],
	theme: {
		extend: {
			colors: {
				accent: '#603008',
			},
			fontFamily: {
				serif: `'Instrument Serif', serif`,
			},
		},
	},
	safelist: ['action'],
	plugins: [],
}
