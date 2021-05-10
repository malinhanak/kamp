import React from 'react';
import Games from 'components/Games';
// import { UserIsAuthenticated } from 'components/ProtectedRoute';
import { render, screen, waitFor } from 'config/test-utils';
import { useSelector } from 'react-redux';
import { initialState } from 'store/reducer';

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
}));

// describe('Is protected', () => {
// 	// initialState without auth data => redirect
// });

describe('Should test the Games Component', () => {
	test('should display logout button', async () => {
		const games = [];
		const auth = {
			isLoaded: true,
			isEmpty: false,
			uid: 'x123',
		};

		useSelector.mockReturnValueOnce(auth);
		useSelector.mockReturnValueOnce(games);

		// const AuthenticatedGames = UserIsAuthenticated(Games);
		// console.log('store state: ', store.getState());

		render(<Games />, { initialState: initialState });

		// console.log('store state: ', store.getState());
		const linkElement = await screen.findByText(/Logga ut/i);
		await waitFor(() => expect(linkElement).toBeInTheDocument());
	});
});
