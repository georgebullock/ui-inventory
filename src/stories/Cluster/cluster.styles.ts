import styled, { css } from 'styled-components';
import { ClusterProps } from './Cluster';

export const StyledCluster = styled.div<ClusterProps>(
	({ justify, align, space }) => css`
		overflow: hidden;

		& > * {
			display: flex;
			flex-wrap: wrap;
			justify-content: ${justify};
			align-items: ${align};
			margin: ${space};
		}

		& > * > * {
			margin: ${space};
		}
	`
);
