import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Sidebar, SidebarProps } from './Sidebar';
import { Stack } from './../Stack/Stack';
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
	sideWidth: `20ch`,
	contentMin: `50%`,
	space: theme.light.spacing.s0,
	noStretch: false,
	contentLeft: (
		<Stack space={theme.light.spacing.s0}>
			<Box
				padding={theme.light.spacing.s0}
				borderWidth={theme.light.border.base}
			>
				Sidebar
			</Box>
		</Stack>
	),
	contentRight: (
		<Stack space={theme.light.spacing.s0}>
			<Box
				padding={theme.light.spacing.s0}
				borderWidth={theme.light.border.base}
			>
				Main Content
			</Box>
			<Box
				padding={theme.light.spacing.s0}
				borderWidth={theme.light.border.base}
			>
				Main Content
			</Box>
			<Box
				padding={theme.light.spacing.s0}
				borderWidth={theme.light.border.base}
			>
				Main Content
			</Box>
			<Box
				padding={theme.light.spacing.s0}
				borderWidth={theme.light.border.base}
			>
				Main Content
			</Box>
		</Stack>
	)
};
