// Import required Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlSgVufNHn0ajgw9F3bVmDT2jfFfTcedk",
  authDomain: "login-ebc8b.firebaseapp.com",
  projectId: "login-ebc8b",
  storageBucket: "login-ebc8b.appspot.com", // ✅ corrected
  messagingSenderId: "850526933766",
  appId: "1:850526933766:web:a1f8873214cb58e0cf4487",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Export auth for use in other files
export { auth };
