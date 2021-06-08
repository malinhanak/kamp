import React from 'react';
import { Games } from 'components/game/GamesList';
import { render, screen } from 'config/test-utils';
import { useSelector } from 'react-redux';
import { initialState } from 'store/reducer';
import { games, auth } from 'utils/test-data';

describe('GamesList component', () => {
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
