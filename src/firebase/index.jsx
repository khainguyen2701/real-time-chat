// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_API_KEY_FIREBASE,
  authDomain: "realtime-ae437.firebaseapp.com",
  projectId: "realtime-ae437",
  storageBucket: "realtime-ae437.appspot.com",
  messagingSenderId: "785013443167",
  appId: import.meta.env.VITE_REACT_APP_ID_FIREBASE,
  measurementId: import.meta.env.VITE_REACT_MEASUREMENT_ID_FIREBASE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export {db, auth};
