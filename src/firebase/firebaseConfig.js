/* eslint-disable no-unused-vars */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyCvEQBuDxGuLT-ADO-Gjdz3X_fX9mTt9dU",
  authDomain: "fb-3dstore.firebaseapp.com",
  projectId: "fb-3dstore",
  storageBucket: "fb-3dstore.appspot.com",
  messagingSenderId: "784447865068",
  appId: "1:784447865068:web:44f58bf62c3519c4eee5c9"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
