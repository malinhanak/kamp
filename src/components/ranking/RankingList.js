import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useParams, withRouter } from 'react-router';
import { UserIsAuthenticated } from 'utils/HOC/ProtectedRoute';
import { Message } from 'components/ui-components/Message';
import { Typography, HeadingSix, Paragraph } from 'components/ui-components/Typography';
import ThreeDotsWave from 'components/ui-components/SmallLoader';
import { List, ListItem } from './RankingStyle';

export function RankingList({ isPointsHidden }) {
	const { gameId } = useParams();
	useFirestoreConnect([
		{ collection: 'teams', where: [['gameId', '==', gameId]], storeAs: 'ranking' },
	]);

	const ranking = useSelector((state) => state.firestore.ordered.ranking);

	if (!isLoaded(ranking)) {
		return <ThreeDotsWave />;
	}

	if (isEmpty(ranking)) {
		return <Message title="Woopsie!">Oh nej ranking listan är inte tillgänglig just nu!</Message>;
	}

	console.log('ranking', ranking);

	return (
		<>
			<Typography as={HeadingSix}>Rankinglista</Typography>
			<List>
				{ranking
					.slice()
					.sort((a, b) => b.team_score - a.team_score)
					.map((team) => (
						<ListItem key={team.name}>
							<Typography as={Paragraph} margin="0 0.7rem 0 0" align="left">
								{team.name}
							</Typography>
							<Typography as={Paragraph} fontColor="primary" align="right">
								{isPointsHidden ? '????' : `${team.team_score} p`}
							</Typography>
						</ListItem>
					))}
			</List>
		</>
	);
}
export default withRouter(UserIsAuthenticated(RankingList));
