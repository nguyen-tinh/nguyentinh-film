import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDo4XMGUg3zkAU959xupAnCsXwosJmh0Fw",
  authDomain: "film-nguyentinh.firebaseapp.com",
  projectId: "film-nguyentinh",
  storageBucket: "film-nguyentinh.appspot.com",
  messagingSenderId: "204981145825",
  appId: "1:204981145825:web:aebf0f10bf92d7245fe7a0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };

export default db;
