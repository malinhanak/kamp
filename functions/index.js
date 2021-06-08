const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.writeToPointsFlow = functions.firestore
    .document("team_points/{teamId}")
    .onUpdate(({before, after}, context) => {
      const bfData = before.data();
      const afData = after.data();

      const calculateCurrentScore = Object.values(afData).reduce((t, value) => t + value, 0);
      return db.collection("teams").doc(context.params.teamId).get()
          .then((doc)=> {
            const gameId = doc.data().gameId;
            const name = doc.data().name;
            const diff = Object.keys(afData).reduce((diff, key) => {
              if (bfData[key] === afData[key]) return diff;
              return {...diff, [key]: afData[key]};
            }, {});
            const game = Object.keys(diff)[0];
            const gameName = game.charAt(0).toUpperCase() + game.slice(1);
            const regPoints = Math.abs(Object.values(diff)[0] - bfData[game]);
            const data = `${name} registrerade ${regPoints} poäng ${gameName}, deras total är nu ${calculateCurrentScore}p`;
            db.collection("games").doc(gameId).update({
              pointFlow: admin.firestore.FieldValue.arrayUnion(data),
            });
          }).then(()=> {
            return db.collection("teams").doc(context.params.teamId).update({team_score: calculateCurrentScore});
          }).catch((err) => console.log(err));
    });
