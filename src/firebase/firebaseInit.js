import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB788xmYGHagKDHfnFJCDtrnjjX7UMG7Ck",
  authDomain: "web-builder-3703b.firebaseapp.com",
  projectId: "web-builder-3703b",
  storageBucket: "web-builder-3703b.appspot.com",
  messagingSenderId: "392135967492",
  appId: "1:392135967492:web:762827f5a79e155c6b4651",
  measurementId: "G-DXLHJQR53N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
