// Import modul Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Config Firebase Web App
const firebaseConfig = {
  apiKey: "AIzaSyAA0Vt9bmzUvcjIHw7JbNbs4y0AjdChA_k",
  authDomain: "smart-dobi-system.firebaseapp.com",
  databaseURL: "https://smart-dobi-system-fyp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-dobi-system",
  storageBucket: "smart-dobi-system.firebasestorage.app",
  messagingSenderId: "1056101144656",
  appId: "1:1056101144656:web:0861eb6835377b1ca79955"
};

// Initialize
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
