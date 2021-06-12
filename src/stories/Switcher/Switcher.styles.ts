import styled, { css } from 'styled-components';
import { SwitcherProps } from './Switcher';

export const StyledSwitcher = styled.div<SwitcherProps>(
	({ theme, threshold, space, limit }) => css``
);
