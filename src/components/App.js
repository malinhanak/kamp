import LoginPage from './Login';
import { Route, Switch } from 'react-router';
import PrivateRoute from './PrivateRoute';
import Games from './Games';
import { useSelector } from 'react-redux';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './ProtectedRoute';
// import { Background } from 'components/Background';

function App() {
	const auth = useSelector((state) => state.firebase.auth);
	console.log(auth);
	return (
		<Switch>
			<Route exact path="/" component={UserIsNotAuthenticated(LoginPage)} />
			<Route exact path="/games" component={UserIsAuthenticated(Games)} />
			<Route path="*" component={LoginPage} />
		</Switch>
	);
}

export default App;
