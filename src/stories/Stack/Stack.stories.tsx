import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Stack, StackProps } from './Stack';
import { Box } from './../Box/Box';
import { theme } from '../../theme/theme';

export default {
	title: 'Example/Stack',
	component: Stack
} as Meta;

const Template: Story<StackProps> = args => (
	<div style={{ height: 960 }}>
		<Stack {...args} />
	</div>
);

const list = [
	{
		data: (
			<Box
				padding={theme.light.spacing.s0}
				borderWidth={theme.light.border.thick}
			>
				Box Content 1
			</Box>
		)
	},
	{
		data: (
			<Box
				padding={theme.light.spacing.s0}
				borderWidth={theme.light.border.thick}
			>
				Box Content 2
			</Box>
		)
	},
	{
		data: (
			<Box
				padding={theme.light.spacing.s0}
				borderWidth={theme.light.border.thick}
			>
				<Box
					padding={theme.light.spacing.s0}
					borderWidth={theme.light.border.thick}
				>
					Nested Box Content 1
				</Box>
				<Box
					padding={theme.light.spacing.s0}
					borderWidth={theme.light.border.thick}
				>
					Nested Box Content 2
				</Box>
			</Box>
		)
	},
	{
		data: (
			<Box
				padding={theme.light.spacing.s0}
				borderWidth={theme.light.border.thick}
			>
				Stack Content 4
			</Box>
		)
	},
	{
		data: (
			<Box
				padding={theme.light.spacing.s0}
				borderWidth={theme.light.border.thick}
			>
				Stack Content 5
			</Box>
		)
	}
];

const Content = list.map(item => item.data);

export const Default = Template.bind({});
Default.args = {
	space: theme.light.spacing.s0,
	recursive: true,
	children: Content
};

export const Split = Template.bind({});
Split.args = {
	space: theme.light.spacing.s0,
	recursive: false,
	splitAfter: 4,
	children: Content
};
