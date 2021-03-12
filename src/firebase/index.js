import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdzIIwRHix97Vs6zc6FRkFNBUa-AjQohE",
  authDomain: "slackv2-33080.firebaseapp.com",
  projectId: "slackv2-33080",
  storageBucket: "slackv2-33080.appspot.com",
  messagingSenderId: "865949057152",
  appId: "1:865949057152:web:47f63de0700e59eb48e665",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
