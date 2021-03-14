import { Theme } from './ThemeInteface';

const BASE_FONT_SIZE: number = 16;

const scale = {
	xs: 2,
	s: 4,
	m: 8,
	base: 16,
	l: 32,
	xl: 64,
	xxl: 128
};

const spacing = {
	xs: () => `${scale.xs / BASE_FONT_SIZE}rem`,
	s: () => `${scale.s / BASE_FONT_SIZE}rem`,
	m: () => `${scale.m / BASE_FONT_SIZE}rem`,
	base: () => `${scale.base / BASE_FONT_SIZE}rem`,
	l: () => `${scale.xl / BASE_FONT_SIZE}rem`,
	xl: () => `${scale.xxl / BASE_FONT_SIZE}rem`,
	xxl: () => `${scale.xxl / BASE_FONT_SIZE}rem`
};

console.log('spacing.xxl :', spacing.xxl());

const breakpoints = {
	mobileM: '22.5em', // 22.5 * 16 = 360px
	tablet: '36em', // 36 * 16 = 576px
	desktopS: '64em', // 64 * 16 = 1024px
	desktopM: '90em', // 90 * 16 = 1440px
	desktopL: '120em' // 120 * 16 = 1920px
};

export const theme: Theme = {
	light: {
		borderRadius: {
			normal: '1rem',
			small: '0.5rem'
		},
		colors: {
			green: {
				100: '#005039',
				70: '#4c8474',
				40: '#99b9b0',
				20: '#ccdcd7',
				10: '#e5edeb',
				5: '#F2F6F5'
			},
			yellow: {
				100: '#e8b000',
				70: '#eec74c',
				40: '#f6df99',
				20: '#faefcc',
				10: '#fcf7e5',
				5: '#FEFBF2',
				gradients: {
					horizontal: 'linear-gradient(90deg, #FCCB41 0%, #D19900 100%)',
					horizontalHover: 'linear-gradient(90deg, #FAD878 0%, #E0B94F 100%)'
				}
			},
			grey: {
				100: '#2c3331',
				70: '#4e4e4e',
				40: '#a9a9a9',
				20: '#cccccc',
				10: '#efefef',
				5: '#fbfbfb',
				gradients: {
					horizontal: 'linear-gradient(270deg, #003C2B 0.21%, #011610 100%)'
				}
			},
			background: {
				primary: '#ffffff',
				secondary: '#fbfbfb',
				transparent: 'transparent'
			},
			success: {
				background: '#e3f4e6',
				foreground: '#49b85c'
			},
			info: {
				light: '#F6FAFD',
				background: '#E4EEF8',
				foreground: '#5092D4'
			},
			warn: {
				background: '#fef5e1',
				foreground: '#fabc37'
			},
			error: {
				background: '#F9E4E1',
				foreground: '#db5039'
			}
		},
		// spacing: {
		// 	xs: () => `${scale.xs / BASE_FONT_SIZE}rem`,
		// 	s: () => `${scale.s / BASE_FONT_SIZE}rem`,
		// 	m: () => `${scale.m / BASE_FONT_SIZE}rem`,
		// 	l: () => `${scale.l / BASE_FONT_SIZE}rem`,
		// 	xl: () => `${scale.xl / BASE_FONT_SIZE}rem`,
		// 	xxl: () => `${scale.xxl / BASE_FONT_SIZE}rem`
		// },
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
				desktopL: '200rem'
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
			//wip
			easing: {
				easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
				easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
				easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
				sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
			},
			duration: {
				shortest: 150,
				shorter: 200,
				short: 250,
				standard: 300,
				complex: 375,
				enteringScreen: 225,
				leavingScreen: 195
			}
		},
		typography: {
			fontFamily: 'roboto',
			fallbackFont: 'Arial',
			fontWeights: {
				regular: 400,
				medium: 600
			},
			h1: {
				fontSize: `${spacing.l()}`,
				lineHeight: `${spacing.l()}`
			},
			h2: {
				fontSize: `${spacing.xl()}`,
				lineHeight: `${spacing.xl()}`
			},
			h3: {
				fontSize: `${spacing.base()}`,
				lineHeight: `${spacing.base()}`
			},
			h4: {
				fontSize: `${spacing.m()}`,
				lineHeight: `${spacing.m()}`
			},
			h5: {
				fontSize: `${spacing.s()}`,
				lineHeight: `${spacing.s()}`
			},
			h6: {
				fontSize: `${spacing.xs()}`,
				lineHeight: `${spacing.xs()}`
			},
			small: {
				fontSize: `${spacing.s()}`,
				lineHeight: `${spacing.s()}`
			},
			base: {
				fontSize: `${spacing.base()}`,
				lineHeight: `${spacing.base()}`
			},
			large: {
				fontSize: `${spacing.l()}`,
				lineHeight: `${spacing.l()}`
			}
		},
		zIndex: {}
	}
};
