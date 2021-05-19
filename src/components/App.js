import LoginPage from './Login';
import { Route, Switch, useHistory } from 'react-router';
import Games from './Games';
import Start from './Start';
import { Background, Layout, TitleCircle } from './ui-components/Background';
import { AnimateSharedLayout } from 'framer-motion';
import { MenuIcon } from './ui-components/MenuIcon';

function App() {
	const { location } = useHistory();

	return (
		<Layout>
			<AnimateSharedLayout type="crossfade">
				<MenuIcon />
				<Background path={location.pathname} viewBox="0 0 700 812" />
			</AnimateSharedLayout>
			<div style={{ width: '100%', marginTop: '280px' }}>
				<Switch>
					<Route exact path="/">
						<Start />
					</Route>
					<Route exact path="/login">
						<TitleCircle title="logga in" />
						<LoginPage />
					</Route>
					<Route exact path="/games">
						<TitleCircle title="Spelkatalog" />
						<Games />
					</Route>
					<Route path="*" component={LoginPage} />
				</Switch>
			</div>
		</Layout>
	);
}

export default App;
