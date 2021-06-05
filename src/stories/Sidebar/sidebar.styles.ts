import styled, { css } from 'styled-components';

export interface StyledSidebarProps {
	sideLeft?: boolean;
	sideWidth?: string;
	contentMin?: string;
	space?: string;
	noStretch?: boolean;
}

export const StyledSidebar = styled.div<StyledSidebarProps>(
	({ theme, sideLeft, sideWidth, contentMin, space, noStretch }) => css`
		overflow: hidden;

		& > * {
			display: flex;
			flex-wrap: wrap;
			${theme.light.spacing.s0
				? `margin: calc(${theme.light.spacing.s0} / 2 * -1);`
				: null}
		}

		& > * > * {
			${theme.light.spacing.s0 ? `margin: calc(${space} / 2);` : null}
			flex-basis: 20ch;
			flex-grow: 1;
		}

		& > * > ${sideLeft ? `:last-child` : `:first-child`} {
			${theme.light.spacing.s0 ? `min-width: calc(50% - 1rem);` : null}
			flex-basis: 0;
			flex-grow: 999;
		}
	`
);
