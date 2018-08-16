import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCEz79lJ1tgYOT6bjyiYbIX6EU9E0Plyw4",
  authDomain: "myfirebaseblogdemo.firebaseapp.com",
  databaseURL: "https://myfirebaseblogdemo.firebaseio.com",
  projectId: "myfirebaseblogdemo",
  storageBucket: "myfirebaseblogdemo.appspot.com",
  messagingSenderId: "182045008833"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
