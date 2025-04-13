import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHfCrGNE4oOANkSAS10tStOPDYclUSBq8",
  authDomain: "coffeeshop-d276f.firebaseapp.com",
  projectId: "coffeeshop-d276f",
  storageBucket: "coffeeshop-d276f.firebasestorage.app",
  messagingSenderId: "489426071170",
  appId: "1:489426071170:web:bd54fde204f80cd4820e9b",
  measurementId: "G-QC1XWKEVVR"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
auth.settings.appVerificationDisabledForTesting = true; 

export const analytics = getAnalytics(app);