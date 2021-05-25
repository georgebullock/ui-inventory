import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Cluster, ClusterProps } from './Cluster';
import { theme } from '../../theme/theme';

export default {
	title: 'Example/Cluster',
	component: Cluster
} as Meta;

const Template: Story<ClusterProps> = args => <Cluster {...args} />;

const list = [
	{
		data: {
			content: 'List Item 1'
		}
	},
	{
		data: {
			content: 'List Item 2'
		}
	},
	{
		data: {
			content: 'List Item 3'
		}
	},
	{
		data: {
			content: 'List Item 4'
		}
	},
	{
		data: {
			content: 'List Item 5'
		}
	}
];

const Content = list.map((item, index) => {
	return (
		<li
			key={index}
			style={{
				padding: theme.light.spacing.s0,
				borderWidth: theme.light.border.thick,
				borderColor: theme.light.colors.blue[40],
				borderStyle: 'solid',
				backgroundColor: theme.light.colors.blue[20],
				borderRadius: theme.light.borderRadius.small,
				color: theme.light.colors.blue[100]
			}}
		>
			{item.data.content}
		</li>
	);
});

export const Default = Template.bind({});
Default.args = {
	justify: theme.light.layout.container.justifyStart,
	align: theme.light.layout.container.alignCenter,
	space: theme.light.spacing.sd3,
	children: Content
};
