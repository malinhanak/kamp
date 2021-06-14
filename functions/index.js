const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.writeToPointsFlow = functions.firestore
    .document("games/{gameId}/team_points/{teamId}")
    .onUpdate(({before, after}, {params}) => {
      const bfData = before.data();
      const afData = after.data();

      /**
       * Create point flow string
       * @param {object} diff object.
       * @param {number} currentScore score number.
       * @param {string} name name of the came.
       * @return {string} flow string.
     */
      function generatePointFlowString(diff, currentScore, name) {
        const game = Object.keys(diff)[0];
        const gameName = game.charAt(0).toUpperCase() + game.slice(1);
        const regPoints = Math.abs(Object.values(diff)[0] - bfData[game]);
        return `${name} registrerade ${regPoints} poäng ${gameName}, deras total är nu ${currentScore}p`;
      }

      const calculateCurrentScore = Object.values(afData).reduce((t, value) => t + value, 0);
      return db.collection("games").doc(params.gameId).collection("teams").doc(params.teamId).get()
          .then((doc)=> {
            // const gameId = doc.data().gameId;
            const name = doc.data().name;
            const diff = Object.keys(afData).reduce((diff, key) => {
              if (bfData[key] === afData[key]) return diff;
              return {...diff, [key]: afData[key]};
            }, {});

            const data = generatePointFlowString(diff, calculateCurrentScore, name);
            db.collection("games").doc(params.gameId).update({
              pointFlow: admin.firestore.FieldValue.arrayUnion(data),
            });
          }).then(()=> {
            return db.collection("games").doc(params.gameId)
                .collection("teams").doc(params.teamId).update({team_score: calculateCurrentScore});
          }).catch((err) => console.log(err));
    });
