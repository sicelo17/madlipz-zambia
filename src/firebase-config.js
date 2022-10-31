import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfAMg2JsSnIDx_-NYT6AjPiDdzdb9N46U",
  authDomain: "madlipz-zambia.firebaseapp.com",
  projectId: "madlipz-zambia",
  storageBucket: "madlipz-zambia.appspot.com",
  messagingSenderId: "108334814006",
  appId: "1:108334814006:web:97016fbb458cb7d68b9997",
  measurementId: "G-SWJDYP49KX"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
