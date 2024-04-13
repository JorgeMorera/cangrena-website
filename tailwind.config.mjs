/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'cinzel': ['Cinzel Decorative', 'cursive'],
			'creepster': ['Creepster', 'cursive'],
			'girassol': ['Girassol', 'cursive'],
			'nosifer': ['Nosifer', 'cursive'],
			'unifrakturcook': ['UnifrakturCook', 'cursive'],
			'unifrakturmaguntia': ['UnifrakturMaguntia', 'cursive'],
		}
	},
	plugins: [],
}
