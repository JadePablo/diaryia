// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import  { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_AUTH_APIKEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_AUTHDOMAIN,
  projectId: process.env.EXPO_PUBLIC_AUTH_PROJECTID,
  storageBucket: process.env.EXPO_PUBLIC_AUTH_STORAGEBUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_AUTH_MESSAGINGSENDERID,
  appId: process.env.EXPO_PUBLIC_AUTH_APPID,
  measurementId: process.env.EXPO_PUBLIC_AUTH_MEASUREMENTID
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STOR = getStorage(FIREBASE_APP);