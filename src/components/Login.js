import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import { auth as authSelector } from 'store/selectors/auth';

function LoginPage() {
	const firebase = useFirebase();
	const history = useHistory();
	const auth = useSelector(authSelector);

	function loginWithGoogle() {
		firebase.login({ provider: 'google', type: 'popup' }).then(() => {
			history.push('/games');
		});
	}

	console.log('auth', auth);

	return (
		<>
			<div>
				<h2>Auth</h2>
				{auth?.isLoaded && auth?.isEmpty && (
					<button
						onClick={(event) => {
							event.preventDefault();
							loginWithGoogle();
						}}
					>
						Logga in med google
					</button>
				)}
			</div>
		</>
	);
}

export default LoginPage;
