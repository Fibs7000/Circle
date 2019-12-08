import {AuthService, User} from "../services/AuthService";
import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBTgAdrSw9JhINt931KfjNortT13YCXTiE",
    authDomain: "circle-bd17b.firebaseapp.com",
    databaseURL: "https://circle-bd17b.firebaseio.com",
    projectId: "circle-bd17b",
    storageBucket: "circle-bd17b.appspot.com",
    messagingSenderId: "1053760659113",
    appId: "1:1053760659113:web:1e0196876b7d1503ad53b8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

describe('AuthService', () => {
    it('should be able to sign in', async () => {
        expect.assertions(1)
        var u = await new AuthService().signInWithCredential("test@test.com", "Passw0rd");
        expect(u.name).toBeTruthy();
    })
    it('should be able to sign up', async () => {
        expect.assertions(2);
        var u = await new AuthService().signUp(new User("", "test1@test.com", "fn", "ln", "0660123456789"), "Passw0rd");
        expect(u).toBeTruthy();
        await firebase.auth().currentUser.delete();
        expect(true).toBeTruthy();
    })
});