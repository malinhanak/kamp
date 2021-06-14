import { GoogleIcon } from 'assets';
import { db } from 'config/client';
import { push } from 'connected-react-router';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { UserIsNotAuthenticated } from '../utils/HOC/ProtectedRoute';
import { useFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import LoginWithGoogle from './ui-components/Button';
import { PageTitle } from './ui-components/PageTitle';
import { HeadingSix, Typography } from './ui-components/Typography';

export const loginVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
	exit: { opacity: 0 },
};

export function LoginPage() {
	const firebase = useFirebase();
	const dispatch = useDispatch();

	function loginWithGoogle() {
		firebase.login({ provider: 'google', type: 'popup' }).then(({ additionalUserInfo, user }) => {
			console.log(user);
			if (additionalUserInfo.isNewUser) {
				const usersRef = db.collection('users');
				return usersRef
					.doc(user.uid)
					.set({
						name: user.displayName,
						email: user.email,
						photoUrl: user.photoURL,
					})
					.then(dispatch(push('new-player')))
					.catch((error) => console.error('Error adding document: ', error));
			} else {
				dispatch(push('games'));
			}
		});
	}

	return (
		<>
			<PageTitle title="logga in" />
			<motion.div
				variants={loginVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				style={{ margin: 'auto' }}
			>
				<LoginWithGoogle
					action={loginWithGoogle}
					variation="google"
					icon={<img src={GoogleIcon} alt="google icon" />}
					text={
						<Typography
							as={HeadingSix}
							casing="upper"
							fontColor="greensDark"
							variants={loginVariants}
							margin="0 0 0 1rem"
						>
							ANSLUT MED GOOGLE
						</Typography>
					}
				/>
			</motion.div>
		</>
	);
}

export default withRouter(UserIsNotAuthenticated(LoginPage));
