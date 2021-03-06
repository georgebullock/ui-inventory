import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Center, CenterProps } from './Center';
import { Stack } from './../Stack/Stack';
import { Box } from './../Box/Box';
import { theme } from '../../theme/theme';

export default {
	title: 'Example/Center',
	component: Center
} as Meta;

const Template: Story<CenterProps> = args => (
	<div style={{ height: 960 }}>
		<Center {...args}>
			<Stack space={theme.light.spacing.s0} recursive={true}>
				{Content}
			</Stack>
		</Center>
	</div>
);

const list = [
	{
		data: {
			padding: `${theme.light.spacing.s0}`,
			borderWidth: `${theme.light.border.thick}`,
			content: 'Box Content 1'
		}
	},
	{
		data: {
			padding: `${theme.light.spacing.s0}`,
			borderWidth: `${theme.light.border.thick}`,
			content: 'Box Content 2'
		}
	},
	{
		data: {
			padding: `${theme.light.spacing.s0}`,
			borderWidth: `${theme.light.border.thick}`,
			content: [
				<Box
					padding={theme.light.spacing.s0}
					borderWidth={theme.light.border.thick}
				>
					Nested Box Content 1
				</Box>,
				<Box
					padding={theme.light.spacing.s0}
					borderWidth={theme.light.border.thick}
				>
					Nested Box Content 2
				</Box>
			]
		}
	},
	{
		data: {
			padding: `${theme.light.spacing.s0}`,
			borderWidth: `${theme.light.border.thick}`,
			content: 'Box Content 4'
		}
	},
	{
		data: {
			padding: `${theme.light.spacing.s0}`,
			borderWidth: `${theme.light.border.thick}`,
			content: 'Box Content 5'
		}
	}
];

const Content = list.map((item, index) => (
	<Box
		key={index}
		padding={item.data.padding}
		borderWidth={item.data.borderWidth}
	>
		{item.data.content}
	</Box>
));

export const Default = Template.bind({});
Default.args = {
	maxWidth: theme.light.layout.container.maxWidth,
	centerText: false,
	gutters: false,
	centerChildren: false,
	children: Content
};
