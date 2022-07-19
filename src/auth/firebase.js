import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
    apiKey: "AIzaSyD0olJuGs4q9bHJ7YnhXaa59Aul7VPPB88",
    authDomain: "movi-app-38713.firebaseapp.com",
    projectId: "movi-app-38713",
    storageBucket: "movi-app-38713.appspot.com",
    messagingSenderId: "244835329199",
    appId: "1:244835329199:web:9a9c4eb5db474b77ace05a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);  

export const createUser=()=>{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }); 
}                                                  