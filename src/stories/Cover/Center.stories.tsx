import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Center, CenterProps } from './Center';
import { theme } from '../../theme/theme';

export default {
	title: 'Example/Center',
	component: Center
} as Meta;

const Template: Story<CenterProps> = args => <Center {...args} />;

const Content = <div>Box</div>;

export const Default = Template.bind({});
Default.args = {
	padding: theme.light.spacing.s0,
	borderWidth: theme.light.border.base,
	children: Content
};
