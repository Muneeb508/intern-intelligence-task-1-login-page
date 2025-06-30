// Use module import
import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Get DOM elements
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Handle login form submit
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset errors
  emailError.textContent = "";
  passwordError.textContent = "";

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // Basic validation
  let valid = true;
  if (!email.includes("@")) {
    emailError.textContent = "Invalid email address.";
    valid = false;
  }

  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (!valid) return;

  // Firebase authentication (modular version)
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      loginForm.reset();
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        emailError.textContent = "No account found with this email.";
      } else if (error.code === "auth/wrong-password") {
        passwordError.textContent = "Incorrect password.";
      } else {
        alert("Login error: " + error.message);
      }
    });
});
