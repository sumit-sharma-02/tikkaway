import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBanuGyOJ7ezqf0HXqE6v__3msRnEYOU7U",
    authDomain: "restaurant-app-bceb0.firebaseapp.com",
    databaseURL: "https://restaurant-app-bceb0-default-rtdb.firebaseio.com",
    projectId: "restaurant-app-bceb0",
    storageBucket: "restaurant-app-bceb0.appspot.com",
    messagingSenderId: "525073196992",
    appId: "1:525073196992:web:1dbb5b5ae2d03679b4ca25",
    measurementId: "G-EGFM01FC9X"
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }