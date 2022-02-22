import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { signInWithPopup, sendEmailVerification, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import { getFirestore, doc, addDoc, setDoc, collection } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6PBXu9qmx9OQuV4JlcSNyw3y7qm5YR4M",
  authDomain: "test-app-91a84.firebaseapp.com",
  databaseURL: "https://test-app-91a84-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-app-91a84",
  storageBucket: "test-app-91a84.appspot.com",
  messagingSenderId: "651924273005",
  appId: "1:651924273005:web:855113773e8be246038c64",
  measurementId: "G-HQ7KKQTN3X"
};
const signInWithGoogle = document.getElementById('signGoogle')
const signOut = document.getElementById('signOut')
const whenSignIn = document.querySelector('.signedIn')
const register = document.getElementById('register')
const save = document.getElementById('save')

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

//logga in med Google
const provider = new GoogleAuthProvider()
signInWithGoogle.onclick = ()=> signInWithPopup(auth, provider)
signOut.onclick = ()=> auth.signOut()

// Registera användare
register.addEventListener('submit', (e)=>{
  e.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  createUserWithEmailAndPassword(auth, email, password).then((cred)=>{
    console.log(cred.user)
    sendEmailVerification(auth.currentUser)
    .then(() => {
      console.log('email sent');
    });
  }).catch((err)=>{
    console.log(err)
  })
})

// Spara till databas
save.addEventListener('submit', (e)=>{
  e.preventDefault()
  const text = document.getElementById('text').value
  const heading = document.getElementById('heading').value
  const saveRef = doc(collection(db, 'Text'))
  const data = {
    text: text,
    heading:heading
  }
  setDoc(saveRef, data).then(()=>{
    console.log('saved to database')
  })
})

// Kollar ifall user är inloggad
onAuthStateChanged(auth, user=>{
  if(user){
    console.log('signed in')
    whenSignIn.hidden = false
  }
  else {
    console.log('not signed in');
  }
})
