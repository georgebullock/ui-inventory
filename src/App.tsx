import React from 'react';
import './App.css';
import styled, { ThemeProvider, css } from 'styled-components';
import { theme } from './theme/theme';
import { GlobalStyles } from './theme/globalStyles';

const Container = styled.div(
	({ theme }) => css`
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		color: ${theme.light.colors.blue[20]};
		background-color: ${theme.light.colors.blue[100]};
		font-size: ${theme.light.typography.h1.fontSize};
		line-height: ${theme.light.typography.base.lineHeight};
	`
);

const Box = styled.div(
	({ theme }) => css`
		display: flex;
		color: ${theme.light.colors.blue[20]};
		background-color: ${theme.light.colors.blue[100]};
		font-size: ${theme.light.typography.h1.fontSize};
		line-height: ${theme.light.typography.base.lineHeight};
	`
);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Container>
				<Box>UI Inventory</Box>
			</Container>
		</ThemeProvider>
	);
}

export default App;
