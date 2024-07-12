// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBB6IREYopHwoHvqo7eoltze7XWkwQbqx0",
    authDomain: "educheckstorage.firebaseapp.com",
    projectId: "educheckstorage",
    storageBucket: "educheckstorage.appspot.com",
    messagingSenderId: "514077167969",
    appId: "1:514077167969:web:c362722c9f9fb146487520",
    measurementId: "G-TDNTFKDCWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { storage, analytics, firebase as default };