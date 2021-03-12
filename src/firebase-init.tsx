import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCpUJXi8RTqfirZFILSp-2CZFhlfsc9WFo",
  authDomain: "gifted-goose.firebaseapp.com",
  projectId: "gifted-goose",
  storageBucket: "gifted-goose.appspot.com",
  messagingSenderId: "388178446696",
  appId: "1:388178446696:web:8a7f33aafaafe171962edd",
  measurementId: "G-HT520X2QXE"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { firebase, auth, firestore };