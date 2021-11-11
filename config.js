import * as firebase from "firebase";
require("@firebase/firestore");

  var firebaseConfig = {
    apiKey: "AIzaSyCDWoXXvv_p4VurCmoSUeHbwcfGPihq010",
  authDomain: "class73-ffc8d.firebaseapp.com",
  projectId: "class73-ffc8d",
  storageBucket: "class73-ffc8d.appspot.com",
  messagingSenderId: "962002538006",
  appId: "1:962002538006:web:001cff3548e240529c6f37"
  };
 
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
