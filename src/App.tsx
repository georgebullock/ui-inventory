import React from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { GlobalStyles } from './theme/globalStyles';

const Container = styled.div`
	display: flex;
	max-width: 80%;
	background-color: ${props => props.theme.light.colors.green[70]};
	font-size: ${props => props.theme.light.typography.secondary.fontSize};
	line-height: 1.5;
	margin: ${props => props.theme.light.spacing.xl} auto;
`;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Container>
				Velit et in cillum mollit proident esse reprehenderit sint laborum
				exercitation excepteur deserunt.
			</Container>
		</ThemeProvider>
	);
}

export default App;
