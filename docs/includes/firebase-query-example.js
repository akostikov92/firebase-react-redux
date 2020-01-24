/** @format */

import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

/**
 * exampleA is equivelant to exampleB --> both return the same single cart item
 * exampleC will return all cart items for a specific user
 */

const exampleA = firestore
  .collection('users')
  .doc('838OUQSLBvUxVEpuM4QA')
  .collection('cartItems')
  .doc('Tp9rPHsW52wEwWhguxcT');

const exampleB = firebase.doc(
  '/users/838OUQSLBvUxVEpuM4QA/cartItems/Tp9rPHsW52wEwWhguxcT'
);

const exampleC = firestore.collection('/users/3488ABELMOQQSUUVpuvx/cartItems');
