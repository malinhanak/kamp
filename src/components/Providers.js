import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { store, rrfProps } from 'store/store';

const Providers = ({ children }) => {
	return (
		<Provider store={store}>
			{/* <ConnectedRouter history={history}> */}
			<ReactReduxFirebaseProvider {...rrfProps}>
				{children}
			</ReactReduxFirebaseProvider>
			{/* </ConnectedRouter> */}
		</Provider>
	);
};
export default Providers;
