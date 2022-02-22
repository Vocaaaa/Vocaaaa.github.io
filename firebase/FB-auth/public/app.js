import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { signInWithPopup, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkLd9jUAvfAgQFQ1opVt9vIii2FEP_JoM",
  authDomain: "test-f6123.firebaseapp.com",
  projectId: "test-f6123",
  storageBucket: "test-f6123.appspot.com",
  messagingSenderId: "808761874087",
  appId: "1:808761874087:web:abf029f627e4d5ae36ed82",
  measurementId: "G-QL0ZG8YEHC"
};
const signInWithGoogle = document.querySelector("#signGoogle");
const signOutBtn = document.querySelector("#signOut");
const whenSignedIn = document.querySelector(".signedIn");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
console.log(auth);

const provider = new GoogleAuthProvider();
signInWithGoogle.onclick = () => signInWithPopup(auth, provider);
signOutBtn.onclick = () => auth.signOut();

onAuthStateChanged(auth, user => {
  if(user) {
    console.log("Signed in");
    whenSignedIn.hidden = false
  } else {
    console.log("Not signed in");
    whenSignedIn.hidden = true
  }
})