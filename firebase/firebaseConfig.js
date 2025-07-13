'use client'; // 👈 Important for App Router

import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCfzY03XixRu86o8JraSFuwr9T_YUVzuV4",
  authDomain: "brabliss-web.firebaseapp.com",
  projectId: "brabliss-web",
  storageBucket: "brabliss-web.firebasestorage.app",
  messagingSenderId: "825448878315",
  appId: "1:825448878315:web:3f2a229d3988ee473b2eae",
  measurementId: "G-1TV78SLN7C"
};

// Prevent re-initialization during Fast Refresh / HMR
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// Auth is safe for SSR
const auth = getAuth(app);

// 👇 Optional: Load analytics only in browser
if (typeof window !== 'undefined') {
  import("firebase/analytics").then(({ getAnalytics }) => {
    getAnalytics(app);
  });
}

export { auth };