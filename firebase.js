import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCjWcWPbKsXCs93mww6B7VWid4RkiRPYxA",
    authDomain: "react-native-projects-80c2f.firebaseapp.com",
    projectId: "react-native-projects-80c2f",
    storageBucket: "react-native-projects-80c2f.appspot.com",
    messagingSenderId: "698804821287",
    appId: "1:698804821287:web:4bb34e66cdc7a43fc69d02",
    measurementId: "G-QSPTY5CN8T"
  };

let app;

if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};