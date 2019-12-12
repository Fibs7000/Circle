import firebase from "firebase";
import "firebase/firestore";

export class User{
    constructor(public uid: string, public email: string, public firstName: string, public name: string, public telNr: string){}
}

export class AuthService {

  constructor(public userDataDB = firebase.firestore().collection("userdata")){}

  private async getUserData(uid: string){
    var user = (await this.userDataDB.doc(uid).get());
    console.log(uid)
    console.log(user);
    console.log(user.data());
    return user.data() as User;
  }

  async signInWithCredential(email: string, password: string): Promise<User> {
    try {
      var u = await new Promise<firebase.auth.UserCredential>((resolve, reject)=> {firebase.auth().signInWithEmailAndPassword(email, password).then(v => resolve(v)).catch(r=> reject(r));});
      if (u.user) {
        var user = await this.getUserData(u.user.uid);
        console.log(user);
        if (user.name) return user;
      }
      throw new Error("User cannot be fetched");
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async signIn(): Promise<User> {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(async user => {
        try {
          if (user) {
            var fetcheduser = await this.getUserData(user.uid);
          if (fetcheduser.name) resolve(fetcheduser);
        }
        reject("No Autologin");
        } catch (error) {
          reject(error.message||error);
        }
      });
    });
  }

  async signOut() {
    return firebase.auth().signOut();
  }

  async signUp(user: User, password: string
  ){
    var res = await firebase.auth().createUserWithEmailAndPassword(user.email, password);
    if(res.user)
    {
        user.uid = res.user.uid;
        await this.userDataDB.doc(user.uid).set(JSON.parse(JSON.stringify(user)));
        return user;
    }
    else{
        throw "Cannot SignUp";
    }
  }
  async sendPasswordResetEmail(email: string) {
    return new Promise<firebase.auth.UserCredential>((resolve, reject)=> {firebase.auth().sendPasswordResetEmail(email).then(v => resolve()).catch(r=> reject(r));});
  }
}
