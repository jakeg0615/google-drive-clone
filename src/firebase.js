// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9MwGCW9NhaofBs_GDrT6PHKJl3GZbAK0",
  authDomain: "medtech117-5f281.firebaseapp.com",
  projectId: "medtech117-5f281",
  storageBucket: "medtech117-5f281.appspot.com",
  messagingSenderId: "160930455987",
  appId: "1:160930455987:web:817b8a365c93c776abebc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyC92Z-aIe2WT0wDFvLKPJXaV4fgiV9EtoU",
//   authDomain: "drive-clone-akky.firebaseapp.com",
//   projectId: "drive-clone-akky",
//   storageBucket: "drive-clone-akky.appspot.com",
//   messagingSenderId: "796326526457",
//   appId: "1:796326526457:web:e9f302de5c994e2f501128",
//   measurementId: "G-JK0KZYN8ZQ",
// });

const firestore = app.firestore();
export const auth = app.auth();
export const storage = app.storage();
export const database = {
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
};
export const getCurrentTimestamp =
  firebase.firestore.FieldValue.serverTimestamp;
export default app;
