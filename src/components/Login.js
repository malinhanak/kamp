import { GoogleIcon } from 'assets';
import { useFirebase } from 'react-redux-firebase';
import { useHistory, withRouter } from 'react-router-dom';
import { UserIsNotAuthenticated } from '../utils/HOC/ProtectedRoute';
import { TitleCircle } from './ui-components/Background';
import LoginWithGoogle from './ui-components/Button';
import { HeadingSix, Typography } from './ui-components/Typography';

export const loginVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
	exit: { opacity: 0 },
};

export function LoginPage() {
	const firebase = useFirebase();
	const history = useHistory();

	function loginWithGoogle() {
		console.log('triggered');
		firebase.login({ provider: 'google', type: 'popup' }).then(() => {
			history.push('/games');
		});
	}

	return (
		<>
			<TitleCircle title="logga in" />
			<LoginWithGoogle
				action={loginWithGoogle}
				variation="google"
				icon={<img src={GoogleIcon} alt="google icon" />}
			/>
			<Typography
				as={HeadingSix}
				fontColor="greensDark"
				variants={loginVariants}
				initial="initial"
				animate="animate"
				exit="exit"
			>
				ANSLUT OCH LÅT SPELEN BÖRJA…
			</Typography>
		</>
	);
}

export default withRouter(UserIsNotAuthenticated(LoginPage));
