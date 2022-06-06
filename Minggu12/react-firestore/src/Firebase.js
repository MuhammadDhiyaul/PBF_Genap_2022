import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};

// const config = {
//   apiKey: "AIzaSyB1dW-X5MnIVbktbSeyeNinfvrsV0G8WYo",
//   authDomain: "flutterfirebase-2be5d.firebaseapp.com",
//   databaseURL: "https://flutterfirebase-2be5d-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "flutterfirebase-2be5d",
//   storageBucket: "flutterfirebase-2be5d.appspot.com",
//   messagingSenderId: "688280762161",
//   appId: "1:688280762161:web:cceb1284e1cd0bfcb86210",
//   measurementId: "G-C8CXTNMWFG"
// };

const config = {
  apiKey: "AIzaSyDz03V1ulFF86J7AVq6Jx3__xWSCZNaMBc",
  authDomain: "minggu12-reactfirestore.firebaseapp.com",
  projectId: "minggu12-reactfirestore",
  storageBucket: "minggu12-reactfirestore.appspot.com",
  messagingSenderId: "520371203503",
  appId: "1:520371203503:web:56426ad5cf4092b72e135a"
};

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
