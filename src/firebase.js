import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAUhCbtCDnQuAiv4gwYgxu79sonrzd8tIA",
  authDomain: "digital-da040.firebaseapp.com",
  projectId: "digital-da040",
  storageBucket: "digital-da040.appspot.com",
  messagingSenderId: "56589898410",
  appId: "1:56589898410:web:034e61c47b4289ff37f6d3",
  measurementId: "G-NKK2TDVTCQ"
};
var fire = firebase.initializeApp(firebaseConfig);

export default fire;