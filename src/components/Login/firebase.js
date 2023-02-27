import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC71yLSYYSdKbTj9bVUsJhnQSefGXWcs0k",
    authDomain: "beach-party-377404.firebaseapp.com",
    projectId: "beach-party-377404",
    storageBucket: "beach-party-377404.appspot.com",
    messagingSenderId: "189712567361",
    appId: "1:189712567361:web:89d35a81e20be949bf0ac0"
}

const fireapp = initializeApp(firebaseConfig);
const auth = getAuth();

export default auth;