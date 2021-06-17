import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Switcher, SwitcherProps } from './Switcher';
import { Box } from './../Box/Box';
import { theme } from '../../theme/theme';

export default {
	title: 'Example/Switcher',
	component: Switcher
} as Meta;

const Template: Story<SwitcherProps> = args => <Switcher {...args} />;

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
			content: 'Box Content 3'
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
	},
	{
		data: {
			padding: `${theme.light.spacing.s0}`,
			borderWidth: `${theme.light.border.thick}`,
			content: 'Box Content 6'
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
	breakpoint: `50rem`,
	space: theme.light.spacing.s0,
	maxItemsPerRow: 5,
	children: Content
};
