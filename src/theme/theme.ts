const MODULAR_SCALE_RATIO: number = 1.25;

const breakpoints = {
	mobileM: '22.5em', // 22.5 * 16 = 360px
	tablet: '36em', // 36 * 16 = 576px
	desktopS: '64em', // 64 * 16 = 1024px
	desktopM: '90em', // 90 * 16 = 1440px
	desktopL: '120em' // 120 * 16 = 1920px
};

export const theme = {
	light: {
		borderRadius: {
			normal: '1rem',
			small: '0.5rem',
			circle: '50%'
		},
		border: {
			thin: `${MODULAR_SCALE_RATIO}px`,
			base: `${Math.pow(MODULAR_SCALE_RATIO, 2)}px`,
			thick: `${Math.pow(MODULAR_SCALE_RATIO, 4)}px`
		},
		colors: {
			blue: {
				100: '#225299',
				70: '#4a83d7',
				40: '#9ebce9',
				20: '#d5e2f6',
				5: '#f1f5fc'
			},
			orange: {
				100: '#ff7922',

				70: '#ff8e44',
				40: '#ffb788',
				20: '#ffe0cc',
				5: '#fff5ee',
				gradients: {
					horizontal: 'linear-gradient(90deg, #ff8e44 0%, #ff7922 100%)',
					horizontalHover: 'linear-gradient(90deg, #ffe0cc 0%, #ffb788 100%)'
				}
			},
			grey: {
				100: '#222222',
				70: '#4e4e4e',
				40: '#7a7a7a',
				20: '#a6a6a6',
				10: '#d2d2d2',
				5: '#e8e8e8'
			},
			background: {
				primary: '#fff',
				secondary: '#f4f4f4',
				transparent: 'transparent'
			},
			success: {
				background: '#dbeedd',
				foreground: '#4daa57'
			},
			info: {
				light: '#e8f3fc',
				background: '#a3d2f3',
				foreground: '#1a8fe3'
			},
			warn: {
				background: '#fcf3cf',
				foreground: '#f1c40f'
			},
			error: {
				background: '#ffd6d2',
				foreground: '#ff331f'
			}
		},
		spacing: {
			sd5: `${MODULAR_SCALE_RATIO / Math.pow(MODULAR_SCALE_RATIO, 5)}rem`,
			sd4: `${MODULAR_SCALE_RATIO / Math.pow(MODULAR_SCALE_RATIO, 4)}rem`,
			sd3: `${MODULAR_SCALE_RATIO / Math.pow(MODULAR_SCALE_RATIO, 3)}rem`,
			sd2: `${MODULAR_SCALE_RATIO / Math.pow(MODULAR_SCALE_RATIO, 2)}rem`,
			sd1: `${MODULAR_SCALE_RATIO / MODULAR_SCALE_RATIO}rem`,
			s0: `${MODULAR_SCALE_RATIO}rem`,
			su1: `${MODULAR_SCALE_RATIO * MODULAR_SCALE_RATIO}rem`,
			su2: `${Math.pow(MODULAR_SCALE_RATIO, 2)}rem`,
			su3: `${Math.pow(MODULAR_SCALE_RATIO, 3)}rem`,
			su4: `${Math.pow(MODULAR_SCALE_RATIO, 4)}rem`,
			su5: `${Math.pow(MODULAR_SCALE_RATIO, 5)}rem`
		},
		icons: {
			s: '2rem',
			m: '3rem',
			l: '4rem'
		},
		layout: {
			breakpoints: {
				mobileS: {
					max: `(max-width: calc(${breakpoints.mobileM} - 1px))`
				},
				mobileM: {
					min: `(min-width: ${breakpoints.mobileM})`,
					max: `(max-width: calc(${breakpoints.tablet} - 1px))`
				},
				tablet: {
					min: `(min-width: ${breakpoints.tablet})`,
					max: `(max-width: calc(${breakpoints.desktopS} - 1px))`
				},
				desktopS: {
					min: `(min-width: ${breakpoints.desktopS})`,
					max: `(max-width: calc(${breakpoints.desktopM} - 1px))`
				},
				desktopM: {
					min: `(min-width: ${breakpoints.desktopM})`,
					max: `(max-width: calc(${breakpoints.desktopL} - 1px))`
				},
				desktopL: {
					min: `(min-width: ${breakpoints.desktopL})`
				}
			},
			container: {
				mobileS: 'calc(100% - 4rem)',
				mobileM: 'calc(100% - 4rem)',
				tablet: 'calc(100% - 4rem)',
				desktopS: '151rem',
				desktopM: '160rem',
				desktopL: '200rem',
				maxWidth: '60ch'
			}
		},
		shadows: {
			outset: [
				'none',
				'0px 0px 2rem rgba(204, 204, 204, 0.5)',
				'0px 0.5rem 2rem rgba(0, 0, 0, 0.2)',
				'0px 1rem 4rem rgba(0, 0, 0, 0.2)'
			],
			inset: [
				'none',
				'inset 0px 0px 1rem 0.5rem rgba(44, 51, 49, 0.2)',
				'inset 0px 0px 1rem 0.5rem rgba(44, 51, 49, 0.7)'
			]
		},
		transitions: {
			easing: {
				easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
				easeOut: 'cubic-bezier(0.4, 0.0, 1, 1)',
				easeIn: 'cubic-bezier(0.0, 0.0, 0.2, 1)'
			},

			duration: {
				shortest: 100,
				shorter: 200,
				short: 250,
				standard: 300,
				large: 350
			}
		},
		typography: {
			fontFamily: 'Roboto',
			fallbackFont: 'Arial',
			fontWeights: {
				regular: 400,
				medium: 600
			},
			h1: {
				fontSize: `${Math.pow(MODULAR_SCALE_RATIO, 4)}rem`,
				lineHeight: MODULAR_SCALE_RATIO
			},
			h2: {
				fontSize: `${Math.pow(MODULAR_SCALE_RATIO, 3)}rem`,
				lineHeight: MODULAR_SCALE_RATIO
			},
			h3: {
				fontSize: `${Math.pow(MODULAR_SCALE_RATIO, 2)}rem`,
				lineHeight: MODULAR_SCALE_RATIO
			},
			base: {
				fontSize: `${MODULAR_SCALE_RATIO}rem`,
				lineHeight: MODULAR_SCALE_RATIO
			},
			secondary: {
				fontSize: `${
					MODULAR_SCALE_RATIO / Math.pow(MODULAR_SCALE_RATIO, 2)
				}rem`,
				lineHeight: MODULAR_SCALE_RATIO
			},
			tertiary: {
				fontSize: `${
					MODULAR_SCALE_RATIO / Math.pow(MODULAR_SCALE_RATIO, 3)
				}rem`,
				lineHeight: MODULAR_SCALE_RATIO
			}
		}
	}
};
