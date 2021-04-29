import { useSelector } from 'react-redux';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

function LoginPage() {
	const firebase = useFirebase();
	const history = useHistory();
	const auth = useSelector((state) => state.firebase.auth);

	function loginWithGoogle() {
		return firebase.login({ provider: 'google', type: 'popup' }).then(() => {
			history.push('/games');
		});
	}

	console.log('auth', auth);

	return (
		<div>
			<div>
				<h2>Auth</h2>
				{!isLoaded(auth.isLoaded) ? (
					<span>Loading...</span>
				) : isEmpty(auth.isEmpty) ? (
					<button
						onClick={(event) => {
							event.preventDefault();
							loginWithGoogle();
						}}
					>
						Login With Google
					</button>
				) : (
					<pre>{JSON.stringify(auth, null, 2)}</pre>
				)}
			</div>
		</div>
	);
}

export default LoginPage;
