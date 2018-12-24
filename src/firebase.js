import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyD8iBS3YOyjVmaLdRffh2XUbkq-ofmvpzQ",
    authDomain: "man-city-cc7d9.firebaseapp.com",
    databaseURL: "https://man-city-cc7d9.firebaseio.com",
    projectId: "man-city-cc7d9",
    storageBucket: "man-city-cc7d9.appspot.com",
    messagingSenderId: "119811798040"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebaseDB,
    firebasePlayers
}
