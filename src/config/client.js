import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	firebase: {
		apiKey: 'AIzaSyCUJbEkDpGmk7Z1IcdJNGTJKZJk4SPm-eo',
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
const db = firebase.firestore();
if (window.location.hostname === 'localhost') {
	db.useEmulator('localhost', 8080);
}

export const { reduxFirebase } = config;
export default db;
