import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { store, rrfProps, history } from 'store/store';
import { ThemeProvider } from 'styled-components';
import { kampTheme } from 'styles/kampTheme';

const Providers = ({ children }) => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<ReactReduxFirebaseProvider {...rrfProps}>
					<ThemeProvider theme={kampTheme}>{children}</ThemeProvider>
				</ReactReduxFirebaseProvider>
			</ConnectedRouter>
		</Provider>
	);
};
export default Providers;
