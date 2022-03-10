import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA1FEYWTtD54eQKdIoozwB2VxvgKP2ao5k",
  authDomain: "reactapp-payer.firebaseapp.com",
  projectId: "reactapp-payer",
  storageBucket: "reactapp-payer.appspot.com",
  messagingSenderId: "427971341512",
  appId: "1:427971341512:web:838acde76730ff14a149fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)