const firebase = require('@firebase/rules-unit-testing');
const fs = require('fs');

const PROJECT_ID = 'kamp-b928e';
const AUTH_OBJ = { uid: 'SSq7uSZe5ew99fOYtG3C6rSE9cVP', email: 'grass.algae.773@example.com' };

function getAuthedFirestore(auth) {
	return firebase.initializeTestApp({ projectId: PROJECT_ID, auth }).firestore();
}

describe.only('firestore security rules', () => {
	afterAll(async () => await Promise.all(firebase.apps().map((app) => app.delete())));

	beforeAll(async () => {
		const rules = fs.readFileSync('firestore.rules', 'utf8');
		await firebase.loadFirestoreRules({ projectId: PROJECT_ID, rules });
	});

	it('should should deny team_leader of other team to change teams point', async () => {
		const db = getAuthedFirestore(AUTH_OBJ);
		const testDoc = db.collection('team_points').doc('6tj7SNwfPYiyr7U93jbp');
		await firebase.assertFails(testDoc.update({ dragkamp: 10 }));
	});

	it('should should allow authenticated user to read team info', async () => {
		const db = getAuthedFirestore(AUTH_OBJ);
		const testDoc = db
			.collection('games')
			.doc('ZrB0Yd6C1KQm6ocj9bj4')
			.collection('teams')
			.doc('9w15tuTk5ixnp9ICFxW5');
		await firebase.assertFails(testDoc.update({ team_score: 1 }));
	});

	it('should require user to be team leader to update points', async () => {
		const db = getAuthedFirestore(AUTH_OBJ);
		const testDoc = db
			.collection('games')
			.doc('ZrB0Yd6C1KQm6ocj9bj4')
			.collection('team_points')
			.doc('9w15tuTk5ixnp9ICFxW5');
		await firebase.assertSucceeds(testDoc.update({ krocket: 10 }));
	});

	it('should only allow game owner or firebase admin can write or change games data', async () => {
		const db = getAuthedFirestore(AUTH_OBJ);
		const testDoc = db.collection('games').doc('ZrB0Yd6C1KQm6ocj9bj4');
		await firebase.assertSucceeds(testDoc.update({ name: 'Tvehögakampen' }));
	});

	it('should stop non game owners from altering game data', async () => {
		const db = getAuthedFirestore(AUTH_OBJ);
		const testDoc = db.collection('games').doc('gj9tHDrpQJrCyAb7Ievv');
		await firebase.assertFails(testDoc.update({ name: 'Bästa 5-Kampen' }));
	});

	it('should allow authenticated user assign to game to read data', async () => {
		const db = getAuthedFirestore(AUTH_OBJ);
		const testDoc = db.collection('games').doc('YB4EkzOJYJKmH1XBxKP7');
		await firebase.assertSucceeds(testDoc);
	});
});
