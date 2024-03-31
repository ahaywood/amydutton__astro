/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte}'],
	theme: {
		extend: {
			backgroundImage: {
				gradient: "url('/images/gradient.svg')"
			},
			backgroundPosition: {
				interiorHeader: "-278px -150px"
			},
			backgroundPosition: {
				leftCenter: "left center"
			},
			borderWidth: {
				1: '1px',
			},
			colors: {
				roti: '#b49146', /* gold */
				armadillo: '#4a4a4a', /* medium gray */
				selectiveYellow: '#ffb700', /* bright yellow */
				onyx: '#373737', /* dark gray */
			},
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				}
			},
			zIndex: {
				hamburger: 9999,
				navigation: 9998,
				page: 1,
			}
		},
		fontFamily: {
			sans: ['Avenir Next', 'Helvetica', 'Arial','sans-serif'],
			mono: ['Roboto Mono', 'Courier', 'mono'],
			serif: ["DM Serif Display", 'Georgia', 'serif'],
			condensed: ['Bebas Neue', 'Arial Narrow','sans-serif']
		}
	},
	plugins: [],
	safelist: ['social-media']
}
