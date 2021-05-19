import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html, body {
		padding: 0;
		margin: 0;
		font-size: 16px;
	}
  body {
    color: ${(props) => props.theme.colors.font};
  }
`;
