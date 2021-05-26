import { createGlobalStyle } from 'styled-components';
import '@fontsource/poppins';

export const GlobalStyle = createGlobalStyle`
	html, body {
		padding: 0;
		margin: 0;
		font-size: 16px;
	}
  body {
    color: ${(props) => props.theme.colors.font};
		font-family: ${(props) => props.theme.font.family};
  }

	#page-title-root {
		width: 100vw;
		max-height: 400px;

		position: fixed;
		top: 0;
		left: 0;
		z-index: 12;

		pointer-events: none;
	}

	#page-background-root {
		height: ${(props) => props.bgHeight || '60vh'};
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;

		pointer-events: none;
	}
`;
