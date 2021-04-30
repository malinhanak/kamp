import { useSelector } from 'react-redux';
import { useFirebase, isLoaded } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

function LoginPage() {
	const firebase = useFirebase();
	const history = useHistory();
	const auth = useSelector((state) => state.firebase.auth);

	function loginWithGoogle() {
		firebase.login({ provider: 'google', type: 'popup' }).then(() => {
			history.push('/games');
		});
	}

	function signOut() {
		firebase.logout().then(() => history.push('/'));
	}

	return (
		<div>
			<h2>Auth</h2>
			{!isLoaded(auth.isLoaded) && <span>Loading...</span>}
			{!auth.uid && (
				<button
					onClick={(event) => {
						event.preventDefault();
						loginWithGoogle();
					}}
				>
					Logga in med google
				</button>
			)}
			{auth.uid && (
				<button
					onClick={(event) => {
						event.preventDefault();
						signOut();
					}}
				>
					Logga ut
				</button>
			)}
		</div>
	);
}

export default LoginPage;
