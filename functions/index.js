const functions = require("firebase-functions");
const admin = require("firebase-admin");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
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

// exports.writeToPointsFlow = functions.firestore
//     .document("teams/{teamId}")
//     .onUpdate(({before, after}, context) => {
//       const beforeData = before.data();
//       const afterData = after.data();
//       const immutableBeforeData = Object.assign({}, beforeData);
//       const immutableAfterData = Object.assign({}, afterData);

//       if (typeof immutableAfterData.team_score !== "number") {
//         console.log(context);
//         console.log("before: ", immutableBeforeData);
//         console.log("after: ", immutableAfterData);
//         const currentTeamScore = typeof immutableBeforeData.team_score === "number" ?
//         immutableBeforeData.team_score :
//         parseInt(immutableBeforeData.team_score.split("-")[1], 10);
//         const getRegisteredPoints = parseInt(immutableAfterData.team_score.split("-")[1], 10);
//         console.log("points", currentTeamScore, getRegisteredPoints);
//         return db.collection("teams").doc(context.params.teamId).update({
//           team_score: currentTeamScore + getRegisteredPoints,
//         }).then(()=> {
//           const data = `${immutableBeforeData.name} registrerade ${getRegisteredPoints}
//           poäng ${immutableAfterData.team_score.split("-")[0]}, deras total är nu ${currentTeamScore + getRegisteredPoints}`;
//           return db.collection("games").doc(immutableBeforeData.gameId).update({
//             pointFlow: admin.firestore.FieldValue.arrayUnion(data),
//           });
//         });
//       } else {
//         return null;
//       }
//     });
// admin.firestore.FieldValue.delete()

// exports.writeToPointsFlow = functions.firestore
//     .document("teams/{teamId}")
//     .onUpdate(({before, after}, context) => {
//       const beforeData = before.data();
//       const afterData = after.data();
//       console.log(context);
//       console.log("before: ", beforeData);
//       console.log("after: ", afterData);
//       const currentTeamScore = beforeData.team_score === "" ?parseInt(beforeData.team_score, 10);
//       const getRegisteredPoints = parseInt(afterData.team_score.split("-")[1], 10);
//       console.log("points", currentTeamScore, getRegisteredPoints);
//       // if (beforeData.team_score !== afterData.team_score) {
//       // const addedPoints = after.team_score === 0 ? before.team_score : after.team_score - before.team_score;
//       // const data = `${before.name} registrerade ${addedPoints} poäng ${before.forGame},
//       // deras total är nu ${after.team_score}`;
//       // return db.collection("games").doc(before.gameId).update({
//       //   pointFlow: admin.firestore.FieldValue.arrayUnion(data),
//       // });
//       // .then((snapshot)=>{
//       //   console.log(snapshot);
//       //   // return db.collection("teams").doc(context.params.teamId).update({
//       //   //   forGame: admin.firestore.FieldValue.delete(),
//       //   // });
//       // });
//       // }
//       return null;
//     });
