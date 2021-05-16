import styled, { css } from 'styled-components';
import { BoxProps } from './Box';

export const StyledBox = styled.div<BoxProps>(
	({ theme, padding, borderWidth }) => css`
		padding: ${padding};
		border: ${borderWidth} ${theme.light.colors.grey[100]} solid;
		color: ${theme.light.colors.grey[100]};
		background-color: ${theme.light.colors.blue[20]};

		& * {
			color: inherit;
		}
	`
);
