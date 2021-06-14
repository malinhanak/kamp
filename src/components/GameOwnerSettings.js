import { useParams, withRouter } from 'react-router';
import { UserIsAuthenticated } from 'utils/HOC/ProtectedRoute';
import { Typography, HeadingSix, Paragraph } from 'components/ui-components/Typography';
import { db } from 'config/client';
import { Switch } from './Switch';
import styled from 'styled-components';

const SettingsRow = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export function GameOwnerSettings({ isPointsHidden }) {
	let { gameId } = useParams();

	const hidePoints = () => {
		const gameRef = db.collection('games').doc(gameId);
		return gameRef
			.update({
				hide_points: !isPointsHidden,
			})
			.catch((error) => console.error('Error updating document: ', error));
	};

	return (
		<>
			<Typography as={HeadingSix} margin="0 0 2rem 0">
				Admin Inställningar
			</Typography>
			<SettingsRow>
				<Typography as={Paragraph} align="left">
					Dölj poäng i rankinglistan
				</Typography>
				<Switch isOn={isPointsHidden} action={hidePoints} />
			</SettingsRow>
		</>
	);
}
export default withRouter(UserIsAuthenticated(GameOwnerSettings));
