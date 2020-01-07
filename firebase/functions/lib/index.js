"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const firebase_admin_1 = require("firebase-admin");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.countUsersAtEvent = functions.firestore.document('events/{eventID}/usersThere/{userID}').onWrite(async (change, context) => {
    if (!change.before.exists || !change.after.exists)
        firebase_admin_1.firestore().collection('events').doc(context.params.eventID)
            .update({ usersThere: (await change.after.ref.parent.listDocuments()).length });
});
//# sourceMappingURL=index.js.map