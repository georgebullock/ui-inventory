// Import theme
import { theme } from '.';

// Import original theme declarations
import {} from 'styled-components';

// Set a theme type
type themeType = typeof theme;

// Extend the theme type
declare module 'styled-components' {
	export interface DefaultTheme extends themeType {}
}
