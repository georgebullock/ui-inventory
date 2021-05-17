import styled, { css } from 'styled-components';
import { CenterProps } from './Center';

export const StyledCenter = styled.div<CenterProps>(
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
