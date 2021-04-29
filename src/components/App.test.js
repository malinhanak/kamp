import { screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from './App';
import { render } from 'config/test-utils';
import { initialState } from 'store/reducer';
import { store } from 'store/store';

test('renders learn react link', () => {
	const history = createMemoryHistory();
	render(<App />, { initialState: initialState, store });
	const linkElement = screen.getByText(/kamp/i);
	expect(linkElement).toBeInTheDocument();
});
