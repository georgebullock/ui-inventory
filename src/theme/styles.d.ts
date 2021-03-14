import {} from 'styled-components';
import { Theme } from './ThemeInteface';

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
