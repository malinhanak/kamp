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

	.slide-up-enter {
		transform: translateY(0%);
	}
	.slide-up-enter-active {
		transform: translateY(0%);
		transition: transform 1000ms ease-in-out;
	}
	.slide-up-exit {
		transform: translateY(-18%%);
	}
	.slide-up-exit-active {
		transform: translateY(-18%%);
		transition: transform 1000ms ease-in-out;
	}
`;
