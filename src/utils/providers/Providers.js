import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { configureStore } from 'store/store';
import { ThemeProvider } from 'styled-components';
import { kampTheme } from 'styles/kampTheme';
import DrawerProvider from './drawerProvider';
import { createFirestoreInstance } from 'redux-firestore';
import fbConfig, { reduxFirebase } from 'config/client';

const { store, history } = configureStore();

export const rrfProps = {
	firebase: fbConfig,
	config: reduxFirebase,
	dispatch: store.dispatch,
	createFirestoreInstance,
};

const Providers = ({ children }) => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<ReactReduxFirebaseProvider {...rrfProps}>
					<DrawerProvider>
						<ThemeProvider theme={kampTheme}>{children}</ThemeProvider>
					</DrawerProvider>
				</ReactReduxFirebaseProvider>
			</ConnectedRouter>
		</Provider>
	);
};
export default Providers;
