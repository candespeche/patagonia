import firebase from "firebase";

// export const auth = firebase.auth();
// export const db = firebase.firestore();

const firebaseConfig = {
    apiKey: "AIzaSyBMfjjxMayc4pqfSuBKPxKQE5lhBGhrZxM",
    authDomain: "itesaprinter.firebaseapp.com",
    databaseURL: "https://itesaprinter.firebaseio.com",
    projectId: "itesaprinter",
    storageBucket: "itesaprinter.appspot.com",
    messagingSenderId: "3575880463",
    appId: "1:3575880463:web:620ecfab01a93612ef7c7a",
    measurementId: "G-70ZR2VJQ5F"
};


firebase.initializeApp(firebaseConfig)
//   firebase.analytics()

export default firebase;
// https://patagonia-aa25c.firebaseio.com/


