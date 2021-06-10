import { useContext, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import { uiControlContext } from 'utils/providers/uiControlProvider';
import { Message } from 'components/ui-components/Message';
import Modal from 'components/ui-components/Modal';
import ThreeDotsWave from 'components/ui-components/SmallLoader';
import { TransformParagraph } from 'components/ui-components/Typography';
import { auth as authSelector } from 'store/selectors/auth';
import htmr from 'htmr';
import styled from 'styled-components';
import GameInput from 'components/game/GameInput';
import { useParams } from 'react-router';

const RuleContainer = styled.section`
	flex: 1 1 85%;
	overflow-y: scroll;
`;

function GameModal() {
	const { gameId } = useParams();
	const { uid } = useSelector(authSelector);
	const title = useSelector((state) => state.app.selectedGame) || '';

	const { isModalOpen, closeModal } = useContext(uiControlContext);
	const dispatch = useDispatch();
	useFirestoreConnect([
		{ collection: 'rules', doc: title.toLowerCase() },
		{
			collection: 'teams',
			where: [
				['gameId', '==', gameId],
				['team_leader', '==', uid],
			],
			storeAs: 'team',
		},
		{ collection: 'team_points', storeAs: 'teamPoints' },
	]);

	const unSetSelectedGame = () => {
		closeModal();
		dispatch({ type: 'SELECTED_GAME', payload: null });
	};

	const rules = useSelector((state) => state.firestore.ordered.rules);
	const team = useSelector((state) => state.firestore.ordered.team);

	const transform = {
		p: TransformParagraph,
	};

	if (!isLoaded(team)) return <ThreeDotsWave />;

	const isTeamLeader = team[0].team_leader === uid;

	const renderRules = () => {
		if (!isLoaded(rules)) return <ThreeDotsWave />;
		if (isEmpty(rules))
			return (
				<Message title="Shoot!">
					Ajdå din spelledare verkar ha glömt lägga in regler! Måste vara free for all som gäller
					då!
				</Message>
			);

		return <RuleContainer>{htmr(rules[0].rules, { transform })}</RuleContainer>;
	};

	return (
		isModalOpen && (
			<Modal title={title} action={unSetSelectedGame}>
				{renderRules()}
				{isTeamLeader && <GameInput teamId={team[0].id} currentGame={title} />}
			</Modal>
		)
	);
}

export default memo(GameModal);
