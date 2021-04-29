import { useSelector } from 'react-redux';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

function LoginPage() {
	const firebase = useFirebase();
	const history = useHistory();
	const auth = useSelector((state) => state.firebase.auth);

	const authFb = firebase.auth();
	const googleProvider = new firebase.auth.GoogleAuthProvider();

	function loginWithGoogle() {
		// authFb
		//   .signInWithPopup(googleProvider)
		//   .then((res) => {
		//     console.log(res.user);
		//   })
		//   .catch((error) => {
		//     console.log(error.message);
		//   });
		firebase.login({ provider: 'google', type: 'popup' }).then(() => {
			history.push('/games');
		});
	}

	function signOut() {
		authFb.signOut().then(() => history.push('/'));
	}

	console.log('auth', auth);
	console.log(firebase);

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
