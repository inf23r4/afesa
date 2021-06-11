import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firebase-firestore"




const firebaseConfig = {
    apiKey: "AIzaSyC4tEDRbbGPs4CjWkIWoute5LWjdWDMrNY",
    authDomain: "utnreact-28026.firebaseapp.com",
    databaseURL: "https://utnreact-28026-default-rtdb.firebaseio.com",
    projectId: "utnreact-28026",
    storageBucket: "utnreact-28026.appspot.com",
    messagingSenderId: "103013912803",
    appId: "1:103013912803:web:c3c461dcc6696d3ba3b5d6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth = firebase.auth();
  firebase.database= firebase.firestore();
  
  export default firebase;