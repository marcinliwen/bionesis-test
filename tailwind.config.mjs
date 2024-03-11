/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			screens: {
			  xl: "1440px",
			},
		  },
		extend: {
			colors:{
				black: '#232222',
				blue_dark:'#0B2C45',
				blue_primary:'#159FD9',
				blue_hover: '#57C3F1',
				blue_active:'#00709F',
				blue_opacity:'#D8F2FC',
				blue_light: '#EDFAFF',
				blue_ocean: '#0F6F9B',
				disabled: '#CBD1DD',
				grey: '#696464',
				neutral: '#FAFAFA',

			}
		},
	},
	plugins: [],
	
}
