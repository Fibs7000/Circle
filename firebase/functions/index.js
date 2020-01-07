//@ts-check

const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
module.exports.countUsersAtEvent = functions.firestore.document('events/{eventID}/usersThere/{userID}').onWrite(async (change, context)=>{
    if(!change.before.exists || !change.after.exists)
        admin.firestore().collection('events').doc(context.params.eventID)
        .update({usersThere: (await change.after.ref.parent.listDocuments()).length})
})

module.exports.countUnreadMessages = functions.firestore.document('/userdata/{uid}/chats/{chatID}/messages/{messageID}').onWrite(async (change, context)=>{
    if(!change.before.exists)
        admin.firestore()
        .collection('userdata').doc(context.params.uid)
        .collection('chats').doc(context.params.chatID)
        .update({unreadMessages: (await change.after.ref.parent.where('read', '==', false).get()).docs.length})
})