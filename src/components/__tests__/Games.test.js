import React from 'react';
import Games from 'components/Games';
import LoginPage from 'components/Login';
import { act, fireEvent, render, screen, waitFor, container } from 'config/test-utils';
import { useSelector } from 'react-redux';
import { initialState } from 'store/reducer';
import { Route } from 'react-router';

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
}));

jest.mock('react-redux-firebase', () => ({
	...jest.requireActual('react-redux-firebase'),
	useFirestoreConnect: jest.fn(),
}));

jest.mock('react-redux-firebase', () => {
	const firebase = jest.fn(() => ({
		...jest.requireActual('react-redux-firebase'),
		useFirebase: () => ({
			logout: jest.fn(),
		}),
	}));
	return { firebase };
});

// describe('Is protected', () => {
// 	// initialState without auth data => redirect
// });

describe('Should test the Games Component', () => {
	test.skip('should display logout button', async () => {
		const games = [
			{
				active: true,
				id: '12345ffff',
				name: 'Tvehögakampen',
				ownerId: 'x123',
			},
			{
				active: true,
				id: '67890dfjjj',
				name: 'Junikampen',
				ownerId: 'x123',
			},
		];
		const auth = {
			isLoaded: true,
			isEmpty: false,
			uid: 'x123',
		};

		useSelector.mockReturnValueOnce(auth);
		useSelector.mockReturnValueOnce(games);

		render(<Games />, { initialState: initialState });
		const gameElement = screen.getByText(container, /Junikampen/i);
		expect(gameElement).toBeInTheDocument();
		const linkElement = await screen.findByText(container, 'Logga ut');
		await waitFor(() => expect(linkElement).toBeInTheDocument());
	});

	test('changing route on signout', async () => {
		const auth = {
			isLoaded: true,
			isEmpty: true,
		};

		useSelector.mockReturnValueOnce(auth);

		render(
			<>
				<Games />
				<Route path="/" component={LoginPage} />
			</>,
			{ initialState: initialState },
		);

		const linkElement = await screen.findByText(/Logga ut/i);
		await waitFor(() => expect(linkElement).toBeInTheDocument());

		await act(async () => {
			fireEvent.click(linkElement);
		});

		const authElement = await screen.findByText(container, 'Auth');
		await waitFor(() => expect(authElement).toBeInTheDocument());
	});
});
