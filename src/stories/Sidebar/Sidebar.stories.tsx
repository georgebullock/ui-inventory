import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Sidebar, SidebarProps } from './Sidebar';
import { Box } from './../Box/Box';
import { theme } from '../../theme/theme';

export default {
	title: 'Example/Sidebar',
	component: Sidebar
} as Meta;

const Template: Story<SidebarProps> = args => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
	sideLeft: true,
	space: theme.light.spacing.s0,
	contentLeft: (
		<Box padding={theme.light.spacing.s0} borderWidth={theme.light.border.base}>
			Sidebar
		</Box>
	),
	contentRight: (
		<Box padding={theme.light.spacing.s0} borderWidth={theme.light.border.base}>
			Main Content
		</Box>
	)
};
