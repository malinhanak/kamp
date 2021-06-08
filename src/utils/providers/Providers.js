import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { configureStore } from 'store/store';
import { ThemeProvider } from 'styled-components';
import { kampTheme } from 'styles/kampTheme';
import UiControlProvider from './uiControlProvider';
import { createFirestoreInstance } from 'redux-firestore';
import fbConfig, { reduxFirebase } from 'config/client';
import { ToastProvider } from 'react-toast-notifications';

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
					<ToastProvider autoDismiss={true}>
						<UiControlProvider>
							<ThemeProvider theme={kampTheme}>{children}</ThemeProvider>
						</UiControlProvider>
					</ToastProvider>
				</ReactReduxFirebaseProvider>
			</ConnectedRouter>
		</Provider>
	);
};
export default Providers;
