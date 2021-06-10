import { memo, useState } from 'react';
import styled from 'styled-components';
import { sharedCss } from 'styles/sharedCss';
import { Plus } from 'react-feather';
import 'firebase/auth';
import 'firebase/firestore';

import { useToasts } from 'react-toast-notifications';
import { db } from 'config/client';
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import ThreeDotsWave from 'components/ui-components/SmallLoader';

const PointsInput = styled.input`
	${sharedCss}
	width: 40%;
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

const PointsContainer = styled.section`
	margin-top: auto;
	margin: 0 auto;
	width: 90%;
	border-radius: 20px;
	border: 1px solid ${(props) => props.theme.colors.primary};
	display: flex;
	justify-content: space-between;
`;

const PointsBtn = styled.button`
	${sharedCss}
	width: 40%;
	padding: 0.8rem;
	border-radius: 0 16px 16px 0;
	border: none;
	margin: 0.24rem 0.3rem;
	background-color: ${(props) => props.theme.colors.primary};

	&:disabled {
		background-color: lightgrey;
	}
`;

function GameInput({ teamId, currentGame }) {
	const { addToast } = useToasts();
	const [points, setPoints] = useState('0');
	const [isUpdating, setIsUpdating] = useState(false);

	useFirestoreConnect([{ collection: 'team_points', doc: teamId, storeAs: 'currentTeamScore' }]);

	const isButtonActive = points !== '0' && points !== '';

	const currentTeamScore = useSelector((state) => state.firestore.ordered.currentTeamScore);

	if (!isLoaded(currentTeamScore)) return <ThreeDotsWave />;

	const submitPoints = () => {
		setIsUpdating(true);

		const toaster = () => {
			return addToast(`Du har nu registrerat ${points} poäng till ditt lag för ${currentGame}`, {
				appearance: 'success',
			});
		};

		const currentPoints = currentTeamScore[0][currentGame.toLowerCase()];
		const calculatingNewTeamGamePoint = currentPoints + parseInt(points, 10);

		const teamRef = db.collection('team_points').doc(teamId);
		return teamRef
			.update({
				[currentGame.toLowerCase()]: calculatingNewTeamGamePoint,
			})
			.then(toaster)
			.then(() => {
				setPoints('0');
				setIsUpdating(false);
			})
			.catch((error) => {
				setIsUpdating(false);
				console.error('Error updating document: ', error);
			});
	};

	return (
		<PointsContainer>
			<PointsInput type="text" value={points} onChange={(e) => setPoints(e.target.value)} />
			<PointsBtn onClick={submitPoints} disabled={isUpdating || !isButtonActive}>
				<Plus size={24} strokeWidth={1.5} color={isUpdating ? 'black' : 'white'} />
			</PointsBtn>
		</PointsContainer>
	);
}

export default memo(GameInput);
