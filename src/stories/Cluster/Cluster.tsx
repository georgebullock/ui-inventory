import React, { ReactElement } from 'react';
import { theme } from '../../theme/theme';
import { StyledCluster } from './cluster.styles';

export interface ClusterProps {
	justify: string;
	align?: string;
	space?: string;
	children: ReactElement<HTMLLIElement>[] | ReactElement<HTMLLIElement>;
}

export const Cluster: React.FC<ClusterProps> = ({
	justify = theme.light.layout.container.justifyStart,
	align = theme.light.layout.container.alignCenter,
	space = theme.light.spacing.s0,
	children
}) => (
	<StyledCluster justify={justify} align={align} space={space}>
		<ul>{children}</ul>
	</StyledCluster>
);
