import firebase from 'firebase/compat/app';
import "firebase/compat/storage"
const firebaseConfig = {
    apiKey: "AIzaSyCnKBkSm_Ep-imnNul9l1M-IFeyoWrv0P4",
    authDomain: "react-image-upload-f988c.firebaseapp.com",
    projectId: "react-image-upload-f988c",
    storageBucket: "react-image-upload-f988c.appspot.com",
    messagingSenderId: "1083779610013",
    appId: "1:1083779610013:web:475afb9bd16e7c23d92b74",
    measurementId: "G-Z00V4M8NXB"
};

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage();

export { firebase, storage }