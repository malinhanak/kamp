import { Route, Switch, useLocation } from 'react-router';
import { Layout, LayoutBackground } from './ui-components/Background';
import { AnimatePresence } from 'framer-motion';
import { MenuIcon } from './ui-components/MenuIcon';
import Drawer from './Drawer';
import DrawerLinks from './DrawerLinks';
import { ContentWrapper } from 'styles/ContentWrapper';
import LoginPage from './Login';
import Games from './GamesList';
import Start from './Start';
import { About } from './About';
import Game from './Game';

function App() {
	const location = useLocation();

	return (
		<>
			<Drawer>
				<DrawerLinks />
			</Drawer>
			<MenuIcon data-testid="drawer-opener" />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
					<Route path={['/login', '/games', '/game', '/about']}>
						<Layout>
							<LayoutBackground viewBox="0 0 700 812" />
							<ContentWrapper>
								<Switch location={location} key={location.key}>
									<Route path="/about" component={About} />
									<Route exact path="/login" component={LoginPage} />
									<Route exact path="/games" component={Games} />
									<Route exact path="/game/:gameId" component={Game} />
									<Route
										exact
										path="/game/:gameId/:selectedGame"
										render={() => 'valt spel regler'}
									/>
									<Route path="*">Can't find path</Route>
								</Switch>
							</ContentWrapper>
						</Layout>
					</Route>
					<Route path={['/']}>
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
