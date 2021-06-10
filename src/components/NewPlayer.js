import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { auth as authSelector } from 'store/selectors/auth';
import { UserIsAuthenticated } from '../utils/HOC/ProtectedRoute';
import { motion } from 'framer-motion';
import { loginVariants } from './Login';
import { PageTitle } from './ui-components/PageTitle';
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import ThreeDotsWave from './ui-components/SmallLoader';
import Input from './ui-components/Input';
import styled from 'styled-components';
import { db } from 'config/client';
import { HeadingSix, Paragraph, Typography } from './ui-components/Typography';
import { push } from 'connected-react-router';

export function NewPlayer() {
	const auth = useSelector(authSelector);
	const dispatch = useDispatch();
	useFirestoreConnect([
		{
			collection: 'users',
			doc: auth.uid,
			storeAs: 'profile',
		},
	]);

	const profile = useSelector((state) => state.firestore.ordered.profile);

	if (!isLoaded(profile)) {
		return <ThreeDotsWave />;
	}

	const upDateProfile = ({ target: { name, value } }) => {
		const profileRef = db.collection('users').doc(auth.uid);
		return profileRef.update({ [name]: value });
	};

	return (
		<>
			<PageTitle title="Ny Spelare" />
			<Container variants={loginVariants} initial="initial" animate="animate" exit="exit">
				<Typography as={HeadingSix} margin="0 0 1.5rem 0" align="justify">
					Tack för att du registrerade dig!
				</Typography>
				<Typography as={Paragraph} margin="0 0 1.5rem 0" align="justify">
					Du loggade visst in på Kamp för första gången precis, vad kul! Här nedanför kan du din
					e-post adress och ditt kamp-namn. Du kan döpa om dig till precis vad du vill, men ett tips
					är att använda det namn som din spelledare känner dig som. Notera att om du ändrar e-post
					adressen påverkar det inte din inloggning, då detta är fristående profil information.
				</Typography>
				<Typography as={Paragraph} margin="0 0 1.5rem 0" align="justify">
					Nu när du är registrerad kan spelledare lägga till dig i lag och tävlingar.
				</Typography>
				<Input id="name" label="Namn" name="name" action={upDateProfile} data={profile[0].name} />
				<Input
					id="email"
					label="E-post"
					name="email"
					action={upDateProfile}
					data={profile[0].email}
				/>
				<Typography as={Paragraph} onClick={() => dispatch(push('games'))}>
					Gå till spelkatalogen
				</Typography>
			</Container>
		</>
	);
}

const Container = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	self-align: stretch;
	flex: 1 1 100%;
`;

export default withRouter(UserIsAuthenticated(NewPlayer));
