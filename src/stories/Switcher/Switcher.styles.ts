import styled, { css } from 'styled-components';
import { SwitcherProps } from './Switcher';

export const StyledSwitcher = styled.div<SwitcherProps>(
	({ breakpoint, space, maxItemsPerRow }) => css`
		display: flex;
		flex-wrap: wrap;
		gap: ${space};

		& > * {
			flex-grow: 1;
			flex-basis: ${`calc((${breakpoint} - 100%) * 999);`};
		}

		& > :nth-last-child(n + ${maxItemsPerRow}),
		& > :nth-last-child(n + ${maxItemsPerRow}) ~ * {
			flex-basis: 100%;
		}
	`
);
