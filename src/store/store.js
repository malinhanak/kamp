import 'firebase/auth';
import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducer';
import { routerMiddleware } from 'connected-react-router';
import { createFirestoreInstance } from 'redux-firestore';
import fbConfig, { reduxFirebase } from 'config/client';

export const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (preloadedState) => {
	const store = createStore(
		rootReducer(history),
		preloadedState,
		composeEnhancer(applyMiddleware(routerMiddleware(history))),
	);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('./reducer', () => {
			store.replaceReducer(rootReducer(history));
		});
	}

	return store;
};

export const store = configureStore();

export const rrfProps = {
	firebase: fbConfig,
	config: reduxFirebase,
	dispatch: store.dispatch,
	createFirestoreInstance,
};
