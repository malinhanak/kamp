import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { history } from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, rrfProps } from '../store/store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

function render(ui, { initialState, store = configureStore(), ...renderOptions } = {}) {
	function Wrapper({ children }) {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<ReactReduxFirebaseProvider {...rrfProps}>
						<BrowserRouter>{children}</BrowserRouter>
					</ReactReduxFirebaseProvider>
				</ConnectedRouter>
			</Provider>
		);
	}
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
