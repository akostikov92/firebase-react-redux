/** @format */

import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyALneXTUrDDQAbie4AbQ6BWYpSW9W8Xtfk',
  authDomain: 'timeless-db.firebaseapp.com',
  databaseURL: 'https://timeless-db.firebaseio.com',
  projectId: 'timeless-db',
  storageBucket: 'timeless-db.appspot.com',
  messagingSenderId: '186456107968',
  appId: '1:186456107968:web:faca0a161c29d26dfaf625',
  measurementId: 'G-EYGQXSTLG4'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
