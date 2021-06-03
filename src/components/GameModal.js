import { useContext, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import { uiControlContext } from 'utils/providers/uiControlProvider';
import { Message } from './ui-components/Message';
import Modal from './ui-components/Modal';
import ThreeDotsWave from './ui-components/SmallLoader';
import { TransformParagraph } from './ui-components/Typography';
import htmr from 'htmr';
import styled from 'styled-components';

const RuleContainer = styled.section`
	flex: 1 1 85%;
	overflow-y: scroll;
`;
const PointsContainer = styled.section`
	flex: 1 1 15%;
`;

function GameModal() {
	// const firebase = useFirebase();
	const title = useSelector((state) => state.app.selectedGame) || '';
	const { closeModal } = useContext(uiControlContext);
	const dispatch = useDispatch();
	useFirestoreConnect([{ collection: 'rules', doc: title.toLowerCase() }]);

	const unSetSelectedGame = () => {
		dispatch({ type: 'SELECTED_GAME', payload: null });
		closeModal();
	};

	// const registerPoints = () => {
	// 	return firebase.push(title.toLowerCase(), { some: 'data' }).then(() => {
	// 		console.log('done');
	// 	});
	// };

	const rules = useSelector((state) => state.firestore.ordered.rules);

	console.log('rules: ', rules);
	const transform = {
		p: TransformParagraph,
	};

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
		<Modal title={title} action={unSetSelectedGame}>
			{renderRules()}
			<PointsContainer>point section</PointsContainer>
		</Modal>
	);
}

export default memo(GameModal);
