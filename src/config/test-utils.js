import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { history } from 'store/store';
import { Router } from 'react-router';

function render(ui, { initialState, store, ...renderOptions } = {}) {
	function Wrapper({ children }) {
		return (
			<Provider store={store}>
				<Router history={history}>{children}</Router>
			</Provider>
		);
	}
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
