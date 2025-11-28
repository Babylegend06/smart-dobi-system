// Import modul Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Config Firebase Web App
const firebaseConfig = {
  apiKey: "AIzaSyBPaObgmHZBQR8-0aX3pTUOFeMOxIsn0Lc",
  authDomain: "smart-dobi-system-fyp.firebaseapp.com",
  databaseURL: "https://smart-dobi-system-fyp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-dobi-system-fyp",
  storageBucket: "smart-dobi-system-fyp.firebasestorage.app",
  messagingSenderId: "377544234994",
  appId: "1:377544234994:web:690cd32c142e7ee501fd6b"
};

// Initialize
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
