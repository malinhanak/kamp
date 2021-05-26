import { Route, Switch, useHistory, useLocation } from 'react-router';
import { Layout, LayoutBackground } from './ui-components/Background';
import { AnimatePresence } from 'framer-motion';
import { MenuIcon } from './ui-components/MenuIcon';
import Drawer from './Drawer';
import DrawerLinks from './DrawerLinks';
import Wrapper from 'styles/ContentWrapper';
import LoginPage from './Login';
import Games from './Games';
import Start from './Start';
import NewPlayer from './NewPlayer';

function App() {
	const location = useLocation();
	const history = useHistory();

	return (
		<>
			<Drawer>
				<DrawerLinks />
			</Drawer>
			<MenuIcon data-testid="drawer-opener" />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
					<Route path={['/login', '/games']}>
						<Layout>
							<LayoutBackground path={history.location.pathname} viewBox="0 0 700 812" />
							<Wrapper>
								<Switch location={location} key={location.key}>
									<Route exact path="/login" component={LoginPage} />
									<Route exact path="/games" component={Games} />
									<Route exact path="/games/:gameId" render={() => 'A game'} />
									<Route path="*">Can't find path</Route>
								</Switch>
							</Wrapper>
						</Layout>
					</Route>
					<Route path={['/about', '/faq', '/etc', '/']}>
						<Switch location={location} key={location.key}>
							<Route path="/" component={Start} />
						</Switch>
					</Route>
				</Switch>
			</AnimatePresence>
		</>
	);
}

export default App;
