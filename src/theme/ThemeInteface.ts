export interface Theme {
	light: {
		borderRadius: {
			normal: string;
			small: string;
		};
		colors: {
			green: {
				100: string;
				70: string;
				40: string;
				20: string;
				10: string;
				5: string;
			};
			yellow: {
				100: string;
				70: string;
				40: string;
				20: string;
				10: string;
				5: string;
				gradients: {
					horizontal: string;
					horizontalHover: string;
				};
			};
			grey: {
				100: string;
				70: string;
				40: string;
				20: string;
				10: string;
				5: string;
				gradients: {
					horizontal: string;
				};
			};
			background: {
				primary: string;
				secondary: string;
				transparent: string;
			};
			success: {
				background: string;
				foreground: string;
			};
			info: {
				light: string;
				background: string;
				foreground: string;
			};
			warn: {
				background: string;
				foreground: string;
			};
			error: {
				background: string;
				foreground: string;
			};
		};
		// spacing: {
		// 	xs: () => string;
		// 	s: () => string;
		// 	m: () => string;
		// 	l: () => string;
		// 	xl: () => string;
		// 	xxl: () => string;
		// };
		icons: {
			s: string;
			m: string;
			l: string;
		};
		layout: {
			breakpoints: {
				mobileS: {
					max: string;
				};
				mobileM: {
					min: string;
					max: string;
				};
				tablet: {
					min: string;
					max: string;
				};
				desktopS: {
					min: string;
					max: string;
				};
				desktopM: {
					min: string;
					max: string;
				};
				desktopL: {
					min: string;
				};
			};
			container: {
				mobileS: string;
				mobileM: string;
				tablet: string;
				desktopS: string;
				desktopM: string;
				desktopL: string;
			};
		};
		shadows: {
			outset: string[];
			inset: string[];
		};
		transitions: {
			//wip
		};
		typography: {
			fontFamily: string;
			fallbackFont: string;
			fontWeights: {
				regular: number;
				medium: number;
			};
			h1: {
				fontSize: string;
				lineHeight: string;
			};
			h2: {
				fontSize: string;
				lineHeight: string;
			};
			h3: {
				fontSize: string;
				lineHeight: string;
			};
			h4: {
				fontSize: string;
				lineHeight: string;
			};
			h5: {
				fontSize: string;
				lineHeight: string;
			};
			h6: {
				fontSize: string;
				lineHeight: string;
			};
			small: {
				fontSize: string;
				lineHeight: string;
			};
			base: {
				fontSize: string;
				lineHeight: string;
			};
			large: {
				fontSize: string;
				lineHeight: string;
			};
		};
		zIndex: {
			//wip
		};
	};
}
