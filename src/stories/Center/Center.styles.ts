import styled, { css } from 'styled-components';
import { CenterProps } from './Center';

export const StyledCenter = styled.div<CenterProps>(
	({ max, centerText, gutters, centerChildren }) => css`
		box-sizing: content-box;
		margin-left: auto;
		margin-right: auto;

		// centerText
		${centerText &&
		`
			text-align: center;
		`}

		// max
		max-width: ${max};

		// gutters
		${gutters &&
		`
			padding-left: 1rem;
			padding-right: 1rem;
			
			`}

		// centerChildren
		${centerChildren &&
		`
			display: flex;
			flex-direction: column;
			align-items: center;
		`}
	`
);
