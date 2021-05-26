import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useRouteMatch, withRouter } from 'react-router';
import { auth as authSelector } from 'store/selectors/auth';
import { UserIsAuthenticated } from '../utils/HOC/ProtectedRoute';
import { PageTitle } from './ui-components/PageTitle';
import { Message } from './ui-components/Message';
import { Typography, GamesLink } from './ui-components/Typography';
import { GamesContainer, GameItem } from 'components/ui-components/GameItem';
import ThreeDotsWave from './ui-components/SmallLoader';

export function Games() {
	const auth = useSelector(authSelector);
	const match = useRouteMatch();
	const query = 'games';

	useFirestoreConnect([
		{
			collection: query,
			where: [
				['players', 'array-contains', auth.uid],
				['active', '==', true],
			],
		},
	]);

	const games = useSelector((state) => state.firestore.ordered.games);

	const gamesContainerVariant = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.4 },
		},
		exit: { opacity: 0 },
	};

	const gameItemVariant = {
		initial: { x: '200vw' },
		animate: {
			x: 0,
			transition: { duration: 0.5 },
		},
		exit: { x: '-200vw' },
	};

	if (!isLoaded(games)) {
		return <ThreeDotsWave />;
	}

	if (isEmpty(games)) {
		return (
			<Message title="Woopsie!">
				Det finns inga spel i katalogen än! Din spelledare jobbar troligen på det!
			</Message>
		);
	}

	return (
		<>
			<PageTitle title="Spelkatalog" />
			<GamesContainer
				variants={gamesContainerVariant}
				initial="initial"
				animate="animate"
				exit="exit"
			>
				{games?.map((game) => (
					<GameItem key={game.id} variants={gameItemVariant}>
						<Typography as={GamesLink} to={`${match.url}/${game.id}`}>
							{game.name}
						</Typography>
					</GameItem>
				))}
			</GamesContainer>
		</>
	);
}
export default withRouter(UserIsAuthenticated(Games));
