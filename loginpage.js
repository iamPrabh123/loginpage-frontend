const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const button = document.getElementById("login-button");
const togglePasswordCheckbox = document.getElementById("togglePassword");

const userEmails = ["user1@example.com", "user2@example.com", "user3@example.com"];
const userPasswords = ["password1", "password2", "password3"];

// Function to check if email and password match
function authenticateUser(email, password) {
  // Loop through the userEmails array
  for (let i = 0; i < userEmails.length; i++) {
    // Check if the current email matches the input email
    if (userEmails[i] === email) {
      // Check if the corresponding password matches the input password
      if (userPasswords[i] === password) {
        return true; // Password matched
      } else {
        return false; // Password does not match
      }
    }
  }
  return false; // Email not found
}

togglePasswordCheckbox.addEventListener("change", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

function username() {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (authenticateUser(email, password)) {
    alert("Login successful!");
  } else {
    alert("Login failed");
  }
}

document.getElementById("forgot").addEventListener("click" , function() {
  window.open("forgot-pass.html", "_blank");
})

