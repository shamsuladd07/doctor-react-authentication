// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDNhKPoEFc2YopeKbl3aar1H_c0KSwF-U",
    authDomain: "doctor-react-authentication.firebaseapp.com",
    projectId: "doctor-react-authentication",
    storageBucket: "doctor-react-authentication.appspot.com",
    messagingSenderId: "214650040120",
    appId: "1:214650040120:web:1d71706155d248eed45bcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;