import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const app = initializeApp({
  apiKey: "AIzaSyDum8p71mH3QmVr1pvhwfRDoyN-8Rk5p2E",
  authDomain: "mlk200-edd0b.firebaseapp.com",
  projectId: "mlk200-edd0b",
  storageBucket: "mlk200-edd0b.firebasestorage.app",
  messagingSenderId: "555920653623",
  appId: "1:555920653623:web:434d980680bf3903d1eeb2"
});

export const auth = getAuth(app);
export const db = getFirestore(app);
// Login by username: Firebase Auth needs an email, so we derive a fake one.
export const toEmail = (u) => `${u}@mektebli.local`;
