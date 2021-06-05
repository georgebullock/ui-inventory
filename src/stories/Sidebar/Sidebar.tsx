import React, { ReactElement } from 'react';
import { StyledSidebar } from './sidebar.styles';

export interface SidebarProps {
	sideLeft?: boolean;
	sideWidth?: string;
	contentMin?: string;
	space?: string;
	noStretch?: boolean;
	contentLeft: ReactElement[] | ReactElement | string;
	contentRight: ReactElement[] | ReactElement | string;
}

export const Sidebar: React.FC<SidebarProps> = ({
	contentLeft,
	contentRight,
	...props
}) => (
	<StyledSidebar
		sideLeft={props.sideLeft}
		sideWidth={props.sideWidth}
		contentMin={props.contentMin}
		space={props.space}
		noStretch={props.noStretch}
	>
		<div>
			<div>{contentLeft}</div>
			<div>{contentRight}</div>
		</div>
	</StyledSidebar>
);
