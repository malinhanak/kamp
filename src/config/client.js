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
		enableRedirectHandling: false,
	},
};

export const { firebase, reduxFirebase } = config;
