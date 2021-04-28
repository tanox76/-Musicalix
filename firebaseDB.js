import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAM4AUXdlLM64Ns4dzrmN0f5fLywWXjWFs",
    authDomain: "musicalix.firebaseapp.com",
    databaseURL: "https://musicalix-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "musicalix",
    storageBucket: "musicalix.appspot.com",
    messagingSenderId: "833320087946",
    appId: "1:833320087946:web:85266cdf42b70814fd5873",
    measurementId: "G-VPSVH4LHN2"
  };

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;