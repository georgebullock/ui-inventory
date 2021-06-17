import React, { ReactElement } from 'react';
import { theme } from '../../theme/theme';
import { StyledSwitcher } from './Switcher.styles';

export interface SwitcherProps {
	breakpoint: string;
	space?: string;
	maxItemsPerRow?: number;
	children: ReactElement[] | ReactElement | string;
}

export const Switcher: React.FC<SwitcherProps> = ({
	breakpoint = `50rem`,
	space = theme.light.spacing.s0,
	maxItemsPerRow = 5,
	children
}) => (
	<StyledSwitcher
		breakpoint={breakpoint}
		space={space}
		maxItemsPerRow={maxItemsPerRow}
	>
		{children}
	</StyledSwitcher>
);
