/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			// Color Palette
			colors: {
				primary: {
					DEFAULT: '#4a9eff',
					dark: '#0066cc',
					light: '#6bb0ff',
					lighter: '#8dc1ff',
				},
				secondary: {
					DEFAULT: '#6c757d',
					dark: '#5a6268',
					light: '#868e96',
				},
				accent: {
					DEFAULT: '#ff6b6b',
					dark: '#ee5a5a',
					light: '#ff8787',
				},
				success: {
					DEFAULT: '#51cf66',
					dark: '#40c057',
					light: '#69db7c',
				},
				warning: {
					DEFAULT: '#ffd43b',
					dark: '#fcc419',
					light: '#ffec8c',
				},
				error: {
					DEFAULT: '#ff6b6b',
					dark: '#ee5a5a',
					light: '#ff8787',
				},
				background: {
					DEFAULT: '#121212',
					alt: '#1a1a1a',
					light: '#ffffff',
					lightAlt: '#f8f8f8',
				},
				text: {
					DEFAULT: '#e0e0e0',
					light: '#b0b0b0',
					dark: '#333333',
					muted: '#6c757d',
				},
				border: {
					DEFAULT: '#333333',
					light: '#e0e0e0',
					dark: '#1a1a1a',
				},
			},
			// Typography
			fontFamily: {
				sans: [
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'sans-serif',
				],
			},
			fontSize: {
				'heading-1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
				'heading-2': ['2.5rem', { lineHeight: '1.3', fontWeight: '600' }],
				'heading-3': ['2rem', { lineHeight: '1.4', fontWeight: '600' }],
				'heading-4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
				'heading-5': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
				'heading-6': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
				'lead': ['1.25rem', { lineHeight: '1.75' }],
				'body': ['1rem', { lineHeight: '1.75' }],
				'small': ['0.875rem', { lineHeight: '1.5' }],
			},
			// Spacing Scale (extends default Tailwind scale)
			spacing: {
				'section': '4rem',
				'section-sm': '2rem',
				'section-lg': '6rem',
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			// Border Radius
			borderRadius: {
				'card': '8px',
				'button': '4px',
				'input': '8px',
			},
			// Box Shadows
			boxShadow: {
				'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
				'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
				'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
				'card-hover': '0 4px 12px rgba(0, 0, 0, 0.15)',
			},
			// Transitions
			transitionDuration: {
				'DEFAULT': '300ms',
				'fast': '150ms',
				'slow': '500ms',
			},
			transitionTimingFunction: {
				'ease-in-out-cubic': 'cubic-bezier(0.4, 0, 0.2, 1)',
			},
			// Breakpoints (matching existing site breakpoints)
			screens: {
				'xs': '480px',
				'sm': '640px',
				'md': '768px',
				'tablet': '968px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			},
		},
	},
	plugins: [],
};
