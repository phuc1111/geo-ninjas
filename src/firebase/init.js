import firebase from 'firebase'
import firestore from 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyDbP6h_RWrkT-5GVF8LXy-UcYkthVO3uYU",
    authDomain: "geo-ninjas-bbf6f.firebaseapp.com",
    databaseURL: "https://geo-ninjas-bbf6f.firebaseio.com",
    projectId: "geo-ninjas-bbf6f",
    storageBucket: "geo-ninjas-bbf6f.appspot.com",
    messagingSenderId: "744203232257",
    appId: "1:744203232257:web:3abcd895085c960727cc00",
    measurementId: "G-FXVCY31FJP"
};

const firebaseapp = firebase.initializeApp(firebaseConfig)
export default firebaseapp.firestore()