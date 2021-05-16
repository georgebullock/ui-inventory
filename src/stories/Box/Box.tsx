import React, { ReactElement } from 'react';
import { theme } from '../../theme/theme';
import { StyledBox } from './box.styles';

export interface BoxProps {
	padding: string;
	borderWidth?: string;
	children: ReactElement[] | ReactElement | string;
}

export const Box: React.FC<BoxProps> = ({
	padding = theme.light.spacing.s0,
	borderWidth = theme.light.spacing.sd5,
	children
}) => (
	<StyledBox padding={padding} borderWidth={borderWidth}>
		{children}
	</StyledBox>
);
