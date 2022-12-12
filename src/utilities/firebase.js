import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDFNNb5GHyI0YZehl3XPcRKkkYpRU_C5Pw",
    authDomain: "crud-app-94e5f.firebaseapp.com",
    projectId: "crud-app-94e5f",
    storageBucket: "crud-app-94e5f.appspot.com",
    messagingSenderId: "265531470551",
    appId: "1:265531470551:web:29df130a2887ba4e9c7692"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;