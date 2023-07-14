import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDip2ERAhJXWPZhVP3gEBWxeCkkL40yYW8",
  authDomain: "biblioteca-dc1e4.firebaseapp.com",
  databaseURL: "https://biblioteca-dc1e4-default-rtdb.firebaseio.com",
  projectId: "biblioteca-dc1e4",
  storageBucket: "biblioteca-dc1e4.appspot.com",
  messagingSenderId: "361700647069",
  appId: "1:361700647069:web:42db4d2aca129ecba07474",
  measurementId: "G-P5WMKEXMLC"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let email = document.getElementById('email-input')
let password = document.getElementById('password-input')

window.register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user
    // ...
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    // ..
    console.log(error)
  })
}
