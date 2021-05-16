import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, BoxProps } from './Box';
import { theme } from '../../theme/theme';

export default {
	title: 'Example/Box',
	component: Box
} as Meta;

const Template: Story<BoxProps> = args => <Box {...args} />;

const Content = <div>Box</div>;

export const Default = Template.bind({});
Default.args = {
	padding: theme.light.spacing.s0,
	borderWidth: theme.light.border.base,
	children: Content
};
