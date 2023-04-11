import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8GSWhr7sC1kL0hl2lkt5IEInoY-5CnyU",
  authDomain: "chat-app-1ac85.firebaseapp.com",
  projectId: "chat-app-1ac85",
  storageBucket: "chat-app-1ac85.appspot.com",
  messagingSenderId: "874720138746",
  appId: "1:874720138746:web:ae51f91a3218baf029c043",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
