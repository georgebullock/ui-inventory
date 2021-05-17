import React, { ReactElement } from 'react';
import { theme } from '../../theme/theme';
import { StyledCenter } from './Center.styles';

export interface CenterProps {
	padding: string;
	borderWidth?: string;
	children: ReactElement[] | ReactElement | string;
}

export const Center: React.FC<CenterProps> = ({
	padding = theme.light.spacing.s0,
	borderWidth = theme.light.spacing.sd5,
	children
}) => (
	<StyledCenter padding={padding} borderWidth={borderWidth}>
		{children}
	</StyledCenter>
);
