import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				body: ['var(--font-body)'],
				mono: ['var(--font-mono)'],
			},
			colors: {
				// Sophisticated Modern Palette
				midnight: {
					50: 'hsl(var(--midnight-50))',
					100: 'hsl(var(--midnight-100))',
					200: 'hsl(var(--midnight-200))',
					300: 'hsl(var(--midnight-300))',
					400: 'hsl(var(--midnight-400))',
					500: 'hsl(var(--midnight-500))',
					600: 'hsl(var(--midnight-600))',
					700: 'hsl(var(--midnight-700))',
					800: 'hsl(var(--midnight-800))',
					900: 'hsl(var(--midnight-900))',
					950: 'hsl(var(--midnight-950))',
				},
				// Professional Slate Palette
				slate: {
					50: 'hsl(var(--slate-50))',
					100: 'hsl(var(--slate-100))',
					200: 'hsl(var(--slate-200))',
					300: 'hsl(var(--slate-300))',
					400: 'hsl(var(--slate-400))',
					500: 'hsl(var(--slate-500))',
					600: 'hsl(var(--slate-600))',
					700: 'hsl(var(--slate-700))',
					800: 'hsl(var(--slate-800))',
					900: 'hsl(var(--slate-900))',
				},
				// Sophisticated Emerald Accent
				emerald: {
					100: 'hsl(var(--emerald-100))',
					200: 'hsl(var(--emerald-200))',
					300: 'hsl(var(--emerald-300))',
					400: 'hsl(var(--emerald-400))',
					500: 'hsl(var(--emerald-500))',
					600: 'hsl(var(--emerald-600))',
				},
				// Semantic Tokens
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					hover: 'hsl(var(--secondary-hover))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					hover: 'hsl(var(--accent-hover))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-card': 'var(--gradient-card)',
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'medium': 'var(--shadow-medium)',
				'strong': 'var(--shadow-strong)',
				'accent': 'var(--shadow-accent)',
				'glass': 'var(--shadow-glass)',
				'glow': 'var(--shadow-glow)',
			},
			borderRadius: {
				lg: 'var(--radius-lg)',
				md: 'var(--radius)',
				sm: 'var(--radius-sm)',
				xl: 'var(--radius-xl)',
			},
			transitionDuration: {
				'fast': 'var(--transition-fast)',
				'normal': 'var(--transition-normal)',
				'slow': 'var(--transition-slow)',
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'slide-up': {
					from: {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-down': {
					from: {
						opacity: '0',
						transform: 'translateY(-30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					from: {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-right': {
					from: {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in': {
					from: {
						opacity: '0'
					},
					to: {
						opacity: '1'
					}
				},
				'fade-in-delayed': {
					'0%, 30%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					from: {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					to: {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'bounce-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.3) translateY(50px)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05) translateY(-10px)'
					},
					'70%': {
						transform: 'scale(0.9) translateY(0px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0px)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'morph': {
					'0%, 100%': { 
						borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' 
					},
					'50%': { 
						borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' 
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px hsl(var(--accent) / 0.5)' 
					},
					'50%': { 
						boxShadow: '0 0 30px hsl(var(--accent) / 0.8), 0 0 50px hsl(var(--accent) / 0.6)' 
					}
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px hsl(var(--accent) / 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 20px hsl(var(--accent) / 0.6), 0 0 30px hsl(var(--accent) / 0.4)' 
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'stagger': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-up': 'slide-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-down': 'slide-down 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-in-left': 'slide-in-left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-in-right': 'slide-in-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-delayed': 'fade-in-delayed 0.8s ease-out',
				'scale-in': 'scale-in 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'bounce-in': 'bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'morph': 'morph 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'stagger': 'stagger 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
