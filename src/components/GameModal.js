import { useContext, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import { uiControlContext } from 'utils/providers/uiControlProvider';
import { Message } from './ui-components/Message';
import Modal from './ui-components/Modal';
import ThreeDotsWave from './ui-components/SmallLoader';
import { TransformParagraph } from './ui-components/Typography';
import htmr from 'htmr';

function GameModal() {
	const { closeModal } = useContext(uiControlContext);
	const dispatch = useDispatch();
	const title = useSelector((state) => state.app.selectedGame) || '';

	const unSetSelectedGame = () => {
		dispatch({ type: 'SELECTED_GAME', payload: null });
		closeModal();
	};

	useFirestoreConnect([
		{
			collection: 'rules',
			doc: title.toLowerCase(),
		},
	]);

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

		return htmr(rules[0].rules, { transform });
	};

	return (
		<Modal title={title} action={unSetSelectedGame}>
			{renderRules()}
		</Modal>
	);
}

export default memo(GameModal);
