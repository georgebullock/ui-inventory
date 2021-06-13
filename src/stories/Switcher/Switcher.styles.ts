import styled, { css } from 'styled-components';
import { SwitcherProps } from './Switcher';

export const StyledSwitcher = styled.div<SwitcherProps>(
	({ theme, threshold, space, limit }) => css`
		display: flex;
		flex-wrap: wrap;
		gap: ${space};

		& > * {
			flex-grow: 1;
			flex-basis: ${`calc((${threshold} - 100%) * 999);`};
		}

		& > :nth-last-child(n + ${limit}),
		& > :nth-last-child(n + ${limit}) ~ * {
			flex-basis: 100%;
		}
	`
);
