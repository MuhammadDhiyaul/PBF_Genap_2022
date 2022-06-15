import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyDh9AmWXXsIz6kj2GKSIjddPpz7qSGNv7Q",
  authDomain: "kasir-app-7de99.firebaseapp.com",
  projectId: "kasir-app-7de99",
  storageBucket: "kasir-app-7de99.appspot.com",
  messagingSenderId: "681122530832",
  appId: "1:681122530832:web:a59a3ba6eaeb0d41236c95"
};

firebase.initializeApp(config);
firebase.auth();
firebase.firestore().settings(settings);

export default firebase;