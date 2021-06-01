import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { GlobalStyle } from 'styles/GlobalStyle';
import '@testing-library/jest-dom/extend-expect';
import Providers from 'utils/providers/Providers';

function render(ui, { ...renderOptions } = {}) {
	function Wrapper({ children }) {
		return (
			<Providers>
				<GlobalStyle />
				{children}
			</Providers>
		);
	}
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
