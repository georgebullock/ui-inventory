import React, { ReactElement } from 'react';
import { theme } from '../../theme/theme';
import { StackContainer } from './stack.styles';

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
	<StackContainer space={space} recursive={recursive} splitAfter={splitAfter}>
		{children}
	</StackContainer>
);
