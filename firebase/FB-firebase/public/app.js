import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { signInWithPopup, GoogleAuthProvider, getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import { getFirestore, doc, setDoc, collection } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

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
const register = document.querySelector("#register");
const save = document.querySelector("#save");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Logga in med Google
const provider = new GoogleAuthProvider();
signInWithGoogle.onclick = () => signInWithPopup(auth, provider);
signOutBtn.onclick = () => auth.signOut();

// Registera användare
register.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  createUserWithEmailAndPassword(auth, email, password).then((cred) => {
    console.log(cred.user);
  }).catch((err) => {
    console.log(err);
  })
})

// Logga ut från användare
signOut(auth).then(() => {
  console.log("User signed out");
}).catch((err) => {
  console.log(err);
})

//Verification Email
sendEmailVerification(auth.cred).then(() => {
  console.log("Email verification sent!");
})

auth.languageCode = "it";

// Spara till databas
save.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = document.querySelector("#text").value
  const heading = document.querySelector("#heading").value
  const saveRef = doc(collection(db, "Text"));
  const data = {
    text: text,
    heading: heading
  }
  setDoc(saveRef, data).then((data) => {
    console.log("Saved to database");
  })
})

// Kollar ifall user är inloggad
onAuthStateChanged(auth, user => {
  if(user) {
    console.log("Signed in");
    whenSignedIn.hidden = false
  } else {
    console.log("Not signed in");
    whenSignedIn.hidden = true
  }
})