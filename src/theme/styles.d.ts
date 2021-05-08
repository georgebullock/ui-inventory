// Import original theme declarations
import {} from 'styled-components';

// Import theme
import { theme } from './theme';

// Extend the theme type
declare module 'styled-components' {
	// Set a theme type
	type Theme = typeof theme;
	export interface DefaultTheme extends Theme {}
}
