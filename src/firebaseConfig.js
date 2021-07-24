import firebase from 'firebase/app'
import "firebase/database"
import 'firebase/storage'

export const base = firebase.initializeApp({
    apiKey: "AIzaSyBLCY4BFqEpXBaiXqXIR1BTFc1HKu9gy8A",
    authDomain: "datafirebase-d3256.firebaseapp.com",
    projectId: "datafirebase-d3256",
    storageBucket: "datafirebase-d3256.appspot.com",
    messagingSenderId: "56949868780",
    appId: "1:56949868780:web:b5a8baf216f366d5243dc9",
    measurementId: "G-W9SPNQNDZ9"
  });
  const storage = firebase.storage();
  const database = firebase.database();

  export { storage, database, firebase as default };