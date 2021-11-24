import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDdGzDTboPpJ7IXpDyK26vbNKfjbnYEgZ0",
    authDomain: "crwn-db-a1002.firebaseapp.com",
    projectId: "crwn-db-a1002",
    storageBucket: "crwn-db-a1002.appspot.com",
    messagingSenderId: "936839427396",
    appId: "1:936839427396:web:625da0000e0a5009d15311",
    measurementId: "G-P05EVMSFHR"
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;