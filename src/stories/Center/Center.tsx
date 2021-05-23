import React, { ReactElement } from 'react';
import { theme } from '../../theme/theme';
import { StyledCenter } from './Center.styles';

export interface CenterProps {
	max?: string;
	centerText?: boolean;
	gutters?: boolean;
	centerChildren?: boolean;
	children: ReactElement[] | ReactElement | string;
}

export const Center: React.FC<CenterProps> = ({
	max = theme.light.spacing.s0,
	centerText = false,
	gutters = false,
	centerChildren = false,
	children
}) => (
	<StyledCenter
		max={max}
		centerText={centerText}
		gutters={gutters}
		centerChildren={centerChildren}
	>
		{children}
	</StyledCenter>
);
