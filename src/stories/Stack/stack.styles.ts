import styled, { css } from 'styled-components';
import { StackProps } from './Stack';

export const StackContainer = styled.div<StackProps>(
	({ space, recursive, splitAfter }) => css`
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		& > * {
			margin-top: ${space};
			margin-bottom: 0;
		}

		& > * + * {
			margin-top: ${space};
		}

		${recursive &&
		`& * + * {
			margin-top: ${space};
		}`}

		${splitAfter &&
		`
			&:only-child {
				height: 100%;
			}
			
			& > :nth-child(4) {
				margin-bottom: auto;
			}
		`}
	`
);
