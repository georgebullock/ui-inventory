import React, { ReactElement } from 'react';
import { theme } from '../../theme/theme';
import { StyledStack } from './stack.styles';

export interface StackProps {
	space: string;
	recursive?: boolean;
	splitAfter?: number;
	children: ReactElement[] | ReactElement | string;
}

export const Stack: React.FC<StackProps> = ({
	space = theme.light.spacing.s0,
	recursive = false,
	splitAfter,
	children
}) => (
	<StyledStack space={space} recursive={recursive} splitAfter={splitAfter}>
		{children}
	</StyledStack>
);
