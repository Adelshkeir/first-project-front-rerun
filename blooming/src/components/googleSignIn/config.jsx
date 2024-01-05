import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJap7ovjy8Sz5-tHDfDN0VnUqqx4xgbuw",
  authDomain: "blooming-6b234.firebaseapp.com",
  projectId: "blooming-6b234",
  storageBucket: "blooming-6b234.appspot.com",
  messagingSenderId: "790023153188",
  appId: "1:790023153188:web:14e713052b730ba64a5ab1",
  measurementId: "G-0XWZXD6M3C",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
