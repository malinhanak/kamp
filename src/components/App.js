import LoginPage from './Login';
import { Route, Switch, useHistory } from 'react-router';
import PrivateRoute from './PrivateRoute';
import { useFirebase } from 'react-redux-firebase';

function App() {
	const firebase = useFirebase();
	const history = useHistory();

	const authFb = firebase.auth();

	function signOut() {
		authFb.signOut().then(() => history.push('/'));
	}
	return (
		<div>
			<h2>kamp</h2>
			<Switch>
				<PrivateRoute path="/games">
					games
					<button
						onClick={(event) => {
							event.preventDefault();
							signOut();
						}}
					>
						Logga ut
					</button>
				</PrivateRoute>
				<Route path="/">
					<LoginPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
