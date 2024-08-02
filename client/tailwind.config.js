/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'three-bark':
					"url(/src/public/images/TreeBark.png), linear-gradient(rgba(0, 0, 0, 0.4), rgba(22, 43, 76, 0.4))",
				'footer-texture': "url('/img/footer-texture.png')",
				'threeBark':
					"url('/src/public/images/TreeBark.png')"
			},
			colors: {
				'light-brown': '#b68a69',
			  },
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
	],
}