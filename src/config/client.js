import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	firebase: {
		apiKey: 'AIzaSyCJ68Fd6NZoRWw52wgLI1x6lFJ6GAxbM7M',
		authDomain: 'kamp-b928e.firebaseapp.com',
		projectId: 'kamp-b928e',
		storageBucket: 'kamp-b928e.appspot.com',
		messagingSenderId: '50441744476',
		appId: '1:50441744476:web:5612e9021c72e9dd2db699',
		measurementId: 'G-5N5XXCQ8FT',
	},
	reduxFirebase: {
		userProfile: 'users',
		useFirestoreForProfile: true,
		enableLogging: false,
		logErrors: true,
	},
};

firebase.initializeApp(config.firebase);
firebase.firestore();
firebase.setLogLevel('silent');

const auth = firebase.auth;
export const db = firebase.firestore();

// eslint-disable-next-line no-restricted-globals
if (location.hostname === 'localhost' || process.env.NODE_ENV === 'development') {
	db.useEmulator('localhost', 8080);
	auth().useEmulator('http://localhost:9099/', { disableWarnings: true });
}

export const { reduxFirebase } = config;
// eslint-disable-next-line import/no-anonymous-default-export
// export default { db, auth };
export default firebase;
