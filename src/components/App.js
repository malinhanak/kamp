import LoginPage from './Login';
import { Route, Switch, useHistory } from 'react-router';
import Games from './Games';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './ProtectedRoute';
import Start from './Start';
import { Background, Layout } from './ui-components/Background';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
	const { location } = useHistory();

	return (
		<Layout>
			<TransitionGroup>
				<CSSTransition
					classNames={location.pathname !== '/' ? 'slide-up' : 'slide-up'}
					timeout={{ enter: 1000, exit: 1000 }}
				>
					<Background path={location.pathname} />
				</CSSTransition>
			</TransitionGroup>
			<Switch>
				<Route exact path="/" component={Start} />
				<Route exact path="/login" component={UserIsNotAuthenticated(LoginPage)} />
				<Route exact path="/games" component={UserIsAuthenticated(Games)} />
				<Route path="*" component={LoginPage} />
			</Switch>
		</Layout>
	);
}

export default App;
