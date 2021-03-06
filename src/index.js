import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import Providers from 'utils/providers/Providers';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from 'styles/GlobalStyle';

ReactDOM.render(
	<React.StrictMode>
		<Providers>
			<GlobalStyle />
			<App />
		</Providers>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
