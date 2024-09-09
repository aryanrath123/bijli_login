// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-e2722.firebaseapp.com",
  projectId: "mern-auth-e2722",
  storageBucket: "mern-auth-e2722.appspot.com",
  messagingSenderId: "236307579526",
  appId: "1:236307579526:web:a5614e6319dd503ebb8707"
};

// Debugging: Check if environment variables are loaded correctly
console.log("Firebase API Key:", import.meta.env.VITE_FIREBASE_API_KEY);  // Should log your API key
console.log("Auth Domain:", firebaseConfig.authDomain);  // Should log "mern-auth-e2722.firebaseapp.com"

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);

// Debugging: Log initialized Firebase services
console.log("Firebase App Initialized:", app);
console.log("Firebase Auth Initialized:", auth);
console.log("Firebase Storage Initialized:", storage);

// Export the initialized app, storage, and auth for use in other parts of the application
export { app, storage, auth };
