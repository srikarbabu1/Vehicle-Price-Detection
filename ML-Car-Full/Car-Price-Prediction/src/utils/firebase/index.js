import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {

  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID
  apiKey: "AIzaSyBaSMyBtZLpd2ZaMVWsedDrHNe7zR3igMs",
  authDomain: "car-price-predictor-47773.firebaseapp.com",
  projectId: "car-price-predictor-47773",
  storageBucket: "car-price-predictor-47773.appspot.com",
  messagingSenderId: "406804694439",
  appId: "1:406804694439:web:2d85f468e7c207c178e282",
  measurementId: "G-RRD3451SD9"

};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth();

export { db, auth }
