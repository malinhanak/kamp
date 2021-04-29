import firebase from 'firebase/app';
import { firebase as fbConfig } from '../config/client';
import 'firebase/firestore';
import LoginPage from './Login';
import { Route, Switch } from 'react-router';
import PrivateRoute from './PrivateRoute';

firebase.initializeApp(fbConfig);
firebase.firestore();

function App() {
	return (
		<div>
			<h2>kamp</h2>
			<Switch>
				<PrivateRoute path="/games">games</PrivateRoute>
				<Route path="/">
					<LoginPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
