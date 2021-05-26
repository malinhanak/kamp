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
		width: 100%;
		max-height: 400px;

		position: fixed;
		top: 0;
		right: 0;
		z-index: 12;

		pointer-events: none;
	}
`;