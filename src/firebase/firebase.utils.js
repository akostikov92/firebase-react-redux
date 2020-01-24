/** @format */

import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB1VmMiTXAC1VMHOa-V05DmGDrrcMhNE_Y',
  authDomain: 'envy-b2569.firebaseapp.com',
  databaseURL: 'https://envy-b2569.firebaseio.com',
  projectId: 'envy-b2569',
  storageBucket: 'envy-b2569.appspot.com',
  messagingSenderId: '61385559833',
  appId: '1:61385559833:web:37e644421e5473500fff88',
  measurementId: 'G-D3YXP1CEKE'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
