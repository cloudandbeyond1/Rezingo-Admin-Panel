import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBZUjR-s6R1l-oIIv28WfwfQ48WydBR5_k",
    authDomain: "rezingodb.firebaseapp.com",
    databaseURL: "https://rezingodb-default-rtdb.firebaseio.com",
    projectId: "rezingodb",
    storageBucket: "rezingodb.appspot.com",
    messagingSenderId: "121510002778",
    appId: "1:121510002778:web:ad29b352dc34e8e1589863",
    measurementId: "G-143YESRFP9"
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();