import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB3q92ISnTGQHdW3huJPW_d0f3Hx89-4rU",
    authDomain: "netflix-clone-f6cf6.firebaseapp.com",
    projectId: "netflix-clone-f6cf6",
    storageBucket: "netflix-clone-f6cf6.appspot.com",
    messagingSenderId: "340757136735",
    appId: "1:340757136735:web:66339bc5c96cff24a6a2ea"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;