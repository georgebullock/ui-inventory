import React, { ReactElement } from 'react';
import { theme } from '../../theme/theme';
import { StyledSwitcher } from './Switcher.styles';

export interface SwitcherProps {
	threshold: string;
	space?: string;
	limit?: number;
	children: ReactElement[] | ReactElement | string;
}

export const Switcher: React.FC<SwitcherProps> = ({
	threshold = `50rem`,
	space = theme.light.spacing.s0,
	limit = 5,
	children
}) => (
	<StyledSwitcher threshold={threshold} space={space} limit={limit}>
		{children}
	</StyledSwitcher>
);
