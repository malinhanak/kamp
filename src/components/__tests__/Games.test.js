import React from 'react';
import { Games } from 'components/Games';
import { render, screen, waitFor } from 'config/test-utils';
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

describe('Should test the Games Component', () => {
	it('should display logout button', async () => {
		useSelector.mockReturnValueOnce(auth);
		useSelector.mockReturnValueOnce(games);

		render(<Games />, { initialState: initialState });
		const gameElement = screen.getByText(/Junikampen/i);
		expect(gameElement).toBeInTheDocument();
		const linkElement = await screen.findByText('Logga ut');
		await waitFor(() => expect(linkElement).toBeInTheDocument());
	});
});
