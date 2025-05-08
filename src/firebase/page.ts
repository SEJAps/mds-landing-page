'use client'

import { useAuth } from "@clerk/astro/react";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/astro/components";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signIntoFirebaseWithClerk = async () => {
  const { getToken, userId } = useAuth();
  if (!userId) return /* html */`<SignInButton />`;
  const token = await getToken({ template: "firebase" });
  const userCredential = await signInWithCustomToken(auth, token || '');
  console.log("User signed in with custom token:", userCredential.user);
  return /* html */`<UserButton />`
}
export {
  signIntoFirebaseWithClerk
}