import React from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { GlobalStyles } from './theme/globalStyles';

const Container = styled.div`
	display: flex;
	width: 600px;
	height: 900px;
	background-color: ${props => props.theme.light.colors.green[70]};
	font-size: ${props => props.theme.light.typography.base.fontSize};
	line-height: ${props => props.theme.light.typography.base.lineHeight};
	margin: 0 auto;
`;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Container>UI Inventory</Container>
		</ThemeProvider>
	);
}

export default App;
