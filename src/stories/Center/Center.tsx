import React, { ReactElement } from 'react';
import { theme } from '../../theme/theme';
import { StyledCenter } from './Center.styles';

export interface CenterProps {
	maxWidth?: string;
	centerText?: boolean;
	gutters?: boolean;
	centerChildren?: boolean;
	children: ReactElement[] | ReactElement | string;
}

export const Center: React.FC<CenterProps> = ({
	maxWidth = theme.light.layout.container.maxWidth,
	centerText = false,
	gutters = false,
	centerChildren = false,
	children
}) => (
	<StyledCenter
		maxWidth={maxWidth}
		centerText={centerText}
		gutters={gutters}
		centerChildren={centerChildren}
	>
		{children}
	</StyledCenter>
);
