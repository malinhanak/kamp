import { useContext, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import { uiControlContext } from 'utils/providers/uiControlProvider';
import { Message } from 'components/ui-components/Message';
import Modal from 'components/ui-components/Modal';
import ThreeDotsWave from 'components/ui-components/SmallLoader';
import { TransformParagraph } from 'components/ui-components/Typography';
import htmr from 'htmr';
import styled, { css } from 'styled-components';
import { Plus } from 'react-feather';

const RuleContainer = styled.section`
	flex: 1 1 85%;
	overflow-y: scroll;
`;
const PointsContainer = styled.section`
	margin-top: auto;
	margin: 0 auto;
	width: 90%;
	border-radius: 20px;
	border: 1px solid ${(props) => props.theme.colors.primary};
	display: flex;
	justify-content: space-between;
`;

const sharedCss = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PointsBtn = styled.button`
	${sharedCss}
	flex: 1 1 15%;
	padding: 0.8rem;
	border-radius: 0 16px 16px 0;
	border: none;
	margin: 0.24rem 0.3rem;
	background-color: ${(props) => props.theme.colors.primary};
`;

const PointsInput = styled.input`
	${sharedCss}
	flex: 1 1 85%;
	padding: 0.8rem;
	border-radius: 30px;
	border: none;
	margin: 0.3rem;
	background-color: transparent;

	font-family: ${(props) => props.theme.font.family};
	color: ${(props) => props.theme.colors.primary};
	font-size: 1rem;

	&:focus {
		outline: none;
	}
`;

function GameModal() {
	// const firebase = useFirebase();
	const [points, setPoints] = useState('0');
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

	const submitPoints = () => console.log(points);

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
			<PointsContainer>
				<PointsInput type="text" value={points} onChange={(e) => setPoints(e.target.value)} />
				<PointsBtn onClick={submitPoints}>
					<Plus size={24} strokeWidth={1.5} color="white" />
				</PointsBtn>
			</PointsContainer>
		</Modal>
	);
}

export default memo(GameModal);
