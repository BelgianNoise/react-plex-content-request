// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAoc0csSXgLhTHH9AcOyzJHWeLG543-dIo",
  authDomain: "plex-content-request.firebaseapp.com",
  databaseURL: "https://plex-content-request.firebaseio.com",
  projectId: "plex-content-request",
  storageBucket: "plex-content-request.appspot.com",
  messagingSenderId: "881136620189",
  appId: "1:881136620189:web:04bff21abb84940f80fa74",
  measurementId: "G-XJ3HLLY1WR"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
