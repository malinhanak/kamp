import { v4 as uuidv4 } from 'uuid';

export const gameOneId = uuidv4();
export const gameTwoId = uuidv4();
export const playerOne = uuidv4();
export const playerTwo = uuidv4();
export const playerThree = uuidv4();

export const game = [
	{
		active: true,
		id: gameOneId,
		name: 'Tvehögakampen',
		ownerId: playerOne,
		players: [playerOne, playerTwo, playerThree],
		team_leaders: [playerOne, playerTwo],
	},
];

export const gameInfo = [
	{
		rules: 'regelbok',
		info: '<p>informations pärm</p>',
	},
];

export const teams = [
	{
		gameId: 'DNW9se9na7zefLbHuqJP',
		name: 'Team 1',
		players: ['C6M6scEdL0coRWCAvnWF4Ot4Gf72', 'h91J21QwVLV922fnNBjmfBqRVFq1'],
		team_leader: ['C6M6scEdL0coRWCAvnWF4Ot4Gf72'],
		team_score: 0,
	},
];

export const games = [
	{
		active: true,
		id: gameOneId,
		name: 'Tvehögakampen',
		ownerId: playerOne,
		players: [playerOne, playerTwo, playerThree],
		team_leaders: [playerOne, playerTwo],
	},
	{
		active: true,
		id: gameTwoId,
		name: 'Junikampen',
		ownerId: 'x123',
		players: [playerOne, playerTwo],
		team_leaders: [playerOne, playerTwo],
	},
];

export const rules = [
	{
		rules: 'lots of rules',
	},
];

export const auth = {
	isLoaded: true,
	isEmpty: false,
	uid: playerOne,
};
