// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log("object", import.meta.env);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_API_KEY_FIREBASE,
  authDomain: "real-time-web-e2d0a.firebaseapp.com",
  projectId: "real-time-web-e2d0a",
  storageBucket: "real-time-web-e2d0a.appspot.com",
  messagingSenderId: "155441827531",
  appId: import.meta.env.VITE_REACT_APP_ID_FIREBASE,
  measurementId: import.meta.env.VITE_REACT_MEASUREMENT_ID_FIREBASE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);