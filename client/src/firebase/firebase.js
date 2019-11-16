import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyB1cMgM9avgTPh4Wvpz2Tru5CYzhnSsjyk",
  authDomain: "hb-fencing.firebaseapp.com",
  databaseURL: "https://hb-fencing.firebaseio.com",
  projectId: "hb-fencing",
  storageBucket: "hb-fencing.appspot.com",
  messagingSenderId: "37202084601",
  appId: "1:37202084601:web:52ac9f36f517ace6925828",
  measurementId: "G-JBS2ZZMTC6"
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();
export {
  auth,
  database,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
};