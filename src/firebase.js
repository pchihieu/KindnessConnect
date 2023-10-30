// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw7QkbMT114nL_Hr0t0a7oQHNNXk50Q1s",
  authDomain: "kindness-reactjs.firebaseapp.com",
  projectId: "kindness-reactjs",
  storageBucket: "kindness-reactjs.appspot.com",
  messagingSenderId: "411201287260",
  appId: "1:411201287260:web:7d4fc138cb7e1826896299",
  measurementId: "G-5NJ43SNLNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const colRefUsers = collection(db, "users");
export const colRefMissions = collection(db, "missions");
export const colRefPresents = collection(db, "presents");
export const colRefMessages = collection(db, "messages");
// export const colRefMessengerCount = collection(db, "messengerCount");
export const colRefMessageCount = collection(db, "messageCount");
export const colRefUserMission = collection(db, "UserMission");
export const storage = getStorage(app);
export default app;
// const analytics = getAnalytics(app);
