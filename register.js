import { initializeApp } from 'https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js';
import { getFirestore } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDip2ERAhJXWPZhVP3gEBWxeCkkL40yYW8",
  authDomain: "biblioteca-dc1e4.firebaseapp.com",
  databaseURL: "https://biblioteca-dc1e4-default-rtdb.firebaseio.com",
  projectId: "biblioteca-dc1e4",
  storageBucket: "biblioteca-dc1e4.appspot.com",
  messagingSenderId: "361700647069",
  appId: "1:361700647069:web:42db4d2aca129ecba07474",
  measurementId: "G-P5WMKEXMLC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});


