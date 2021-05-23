import styled, { css } from 'styled-components';
import { CenterProps } from './Center';

export const StyledCenter = styled.div<CenterProps>(
	({ maxWidth, centerText, gutters, centerChildren }) => css`
		box-sizing: content-box;
		margin-left: auto;
		margin-right: auto;

		${centerText &&
		`
			text-align: center;
		`}

		max-width: ${maxWidth};

		${gutters &&
		`
			padding-left: 1rem;
			padding-right: 1rem;
			
			`}

		${centerChildren &&
		`
			display: flex;
			flex-direction: column;
			align-items: center;
		`}
	`
);
