// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCw8vj91McuirQmVznzQ6nuAKbOdBlbm3E",
    authDomain: "assignment-12-836ed.firebaseapp.com",
    projectId: "assignment-12-836ed",
    storageBucket: "assignment-12-836ed.appspot.com",
    messagingSenderId: "1006412126533",
    appId: "1:1006412126533:web:718912e0ebf6cb4ec6c62c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth