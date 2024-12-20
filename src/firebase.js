import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyANPMNxG1tCBGvHv_EERfK5ohQ7JS0Xa3s",
  authDomain: "realtime-chat-app-320fc.firebaseapp.com",
  projectId: "realtime-chat-app-320fc",
  storageBucket: "realtime-chat-app-320fc.firebasestorage.app",
  messagingSenderId: "1075397823501",
  appId: "1:1075397823501:web:5f49148c6139824c369944",
  measurementId: "G-PRHQTEJVSB",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
