import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  compilerOptions: {
    jsx: "react-jsx", // Make sure this is set to react-jsx for newer versions of React
    moduleResolution: "node",
    esModuleInterop: true,
    allowJs: true,
    skipLibCheck: true
  },
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
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
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'scroll-up-page': {
  				'0%': {
  					transform: 'translateY(50%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0%)',
  					opacity: '1'
  				}
  			},
  			'about-down': {
  				'0%': {
  					maxHeight: '2.5rem'
  				},
  				'100%': {
  					maxHeight: '500px'
  				}
  			},
  			'about-up': {
  				'0%': {
  					maxHeight: '500px'
  				},
  				'100%': {
  					maxHeight: '2.5rem'
  				}
  			}
  		},
  		animation: {
  			'about-down': 'accordion-down 0.3s ease-in-out',
  			'about-up': 'accordion-up 0.3s ease-in-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'scroll-up-page': 'scroll-up-page 1.5s ease-out forwards'
  		}
  	}
  },
	// "compilerOptions": {
	//   "typeRoots": ["./types", "./node_modules/@types"]
	// },
	
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config