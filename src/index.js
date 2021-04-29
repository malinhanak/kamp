import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import Providers from 'components/Providers';
import reportWebVitals from './reportWebVitals';
// import firebase from 'firebase/app';
// import { firebase as fbConfig } from 'config/client';
import 'firebase/firestore';

// firebase.initializeApp(fbConfig);
// firebase.firestore();

ReactDOM.render(
	<React.StrictMode>
		<Providers>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Providers>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
