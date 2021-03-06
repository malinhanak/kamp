import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useParams, withRouter } from 'react-router';
import { UserIsAuthenticated } from 'utils/HOC/ProtectedRoute';
import { PageTitle } from 'components/ui-components/PageTitle';
import { Message } from 'components/ui-components/Message';
import ThreeDotsWave from 'components/ui-components/SmallLoader';
import { Link } from 'react-router-dom';
import { MainContainer } from 'components/ui-components/MainContainer';
import {
	Typography,
	HeadingSix,
	TransformParagraph,
	HeadingFour,
	Paragraph,
} from 'components/ui-components/Typography';
import htmr from 'htmr';
import { GamePicker } from 'components/game/GamePicker';
import { memo } from 'react';

export function Game() {
	let { gameId } = useParams();
	const query = 'games';

	useFirestoreConnect([
		{
			collection: query,
			doc: gameId,
			storeAs: 'game',
		},
		{
			collection: 'gameInfo',
			doc: gameId,
			storeAs: 'info',
		},
		{
			collection: 'teams',
			where: [['gameId', '==', gameId]],
			storeAs: 'teams',
		},
	]);

	const game = useSelector((state) => state.firestore.ordered.game);
	const info = useSelector((state) => state.firestore.ordered.info);
	const teams = useSelector((state) => state.firestore.ordered.teams);

	const gameContainerVariant = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.4 },
		},
		exit: { opacity: 0 },
	};

	const transform = {
		p: TransformParagraph,
	};

	if (!isLoaded(game)) {
		return <ThreeDotsWave />;
	}

	if (isEmpty(game)) {
		return (
			<Message title="Shoot!">
				Nu kunde jag visst inte spelet du letade efter, gå tillbaka till{' '}
				<Link to="/games">spelkatalogen</Link>
			</Message>
		);
	}

	const renderTeams = () => {
		if (!isLoaded(teams)) return <ThreeDotsWave />;
		if (isEmpty(teams))
			return (
				<Typography as={Paragraph} fontColor="font" align="left">
					Finns inga lag registrerade
				</Typography>
			);

		return teams.map((team) => (
			<Typography as={Paragraph} align="left" fontWeight="300" key={team.name}>
				{team.name}
			</Typography>
		));
	};

	const renderGameInfo = () => {
		if (!isLoaded(info)) return <ThreeDotsWave />;
		if (isEmpty(info))
			return (
				<Typography as={Paragraph} fontColor="font" align="left">
					Har din spelledare glömt skriva spel information? Ajdå!
				</Typography>
			);

		return htmr(info[0].info, { transform });
	};

	return (
		<>
			<PageTitle title="välj gren" />
			<MainContainer
				id="game-container"
				variants={gameContainerVariant}
				initial="initial"
				animate="animate"
				exit="exit"
			>
				<Typography
					as={HeadingFour}
					fontColor="font"
					casing="upper"
					align="left"
					margin="0 0 0.5rem 0"
				>
					{game[0].name}
				</Typography>
				{renderGameInfo()}
				<Typography
					as={HeadingSix}
					fontColor="font"
					casing="upper"
					align="left"
					margin="1rem 0 0.5rem 0"
				>
					Årets lag
				</Typography>
				{renderTeams()}
			</MainContainer>
			<GamePicker
				gameSelection={!isEmpty(info) ? info[0].games : null}
				isPointsHidden={game[0].hide_points}
				ownerId={game[0].ownerId}
			/>
		</>
	);
}
export default withRouter(UserIsAuthenticated(memo(Game)));
