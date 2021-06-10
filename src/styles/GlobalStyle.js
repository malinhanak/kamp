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

	* {
		box-sizing: border-box;
	}

	#page-title-root {
		width: 100vw;
		max-height: 400px;

		position: fixed;
		inset: 0 auto auto 0;
		z-index: 12;

		pointer-events: none;
	}

	#page-background-root {
		height: ${(props) => props.bgHeight || '60vh'};
		width: 100vw;
		position: fixed;
		inset: 0 auto auto 0;
		z-index: 1;

		pointer-events: none;
	}
`;
