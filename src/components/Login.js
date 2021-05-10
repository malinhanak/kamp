import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
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

	return (
		<div>
			<h2>Auth</h2>
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
		</div>
	);
}

export default LoginPage;
