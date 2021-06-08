import React from 'react';
import { Game } from 'components/game/Game';
import { render, screen } from 'config/test-utils';
import { useSelector } from 'react-redux';
import { initialState } from 'store/reducer';
import { game, teams, gameInfo as info } from 'utils/test-data';

describe('Game component', () => {
	it('should display title', async () => {
		useSelector.mockReturnValueOnce(game);
		useSelector.mockReturnValueOnce(info);
		useSelector.mockReturnValueOnce(teams);

		render(<Game />, { initialState: initialState });

		const titleElement = await screen.findByText(/välj gren/);
		expect(titleElement).toBeInTheDocument();
	});

	it('should display game title', async () => {
		useSelector.mockReturnValueOnce(game);
		useSelector.mockReturnValueOnce(info);
		useSelector.mockReturnValueOnce(teams);

		render(<Game />, { initialState: initialState });

		const titleElement = await screen.findByText(/Tvehögakampen/);
		expect(titleElement).toBeInTheDocument();
	});

	it('should display game info', async () => {
		useSelector.mockReturnValueOnce(game);
		useSelector.mockReturnValueOnce(info);
		useSelector.mockReturnValueOnce(teams);

		render(<Game />, { initialState: initialState });

		const infoElement = await screen.findByText(/informations pärm/);
		expect(infoElement).toBeInTheDocument();
	});
});
