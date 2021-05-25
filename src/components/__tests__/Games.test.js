import React from 'react';
import { Games } from 'components/Games';
import { fireEvent, render, screen, waitFor } from 'config/test-utils';
import { useSelector } from 'react-redux';
import { initialState } from 'store/reducer';

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
}));

jest.mock('react-redux-firebase', () => ({
	...jest.requireActual('react-redux-firebase'),
	useFirestoreConnect: jest.fn(),
}));

jest.mock('react-dom', () => {
	return {
		...jest.requireActual('react-dom'),
		createPortal: (element, target) => {
			return element;
		},
	};
});

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

describe('Games component', () => {
	it('should display page title', async () => {
		useSelector.mockReturnValueOnce(auth);
		useSelector.mockReturnValueOnce(games);

		render(<Games />, { initialState: initialState });

		const titleElement = await screen.findByText('Spelkatalog');
		expect(titleElement).toBeInTheDocument();
	});

	it('should display the games', async () => {
		useSelector.mockReturnValueOnce(auth);
		useSelector.mockReturnValueOnce(games);

		render(<Games />, { initialState: initialState });
		const gameElement = await screen.findByText(/Junikampen/i);
		expect(gameElement).toBeInTheDocument();
	});
});
