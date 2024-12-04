// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtwRfg2Fbr6YQEBZvt5_LV2zj6N8e7SpI",
  authDomain: "playturf-f6809.firebaseapp.com",
  projectId: "playturf-f6809",
  storageBucket: "playturf-f6809.firebasestorage.app",
  messagingSenderId: "391548622984",
  appId: "1:391548622984:web:9eae2ecf7d97b7ece9e73d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app)

const db=getFirestore();

export {db,auth}