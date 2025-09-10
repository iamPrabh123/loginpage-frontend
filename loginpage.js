const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePasswordCheckbox = document.getElementById("togglePassword");
const responseMessage = document.getElementById("responseMessage");

// Handle form submit
form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent page reload

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue) {
    responseMessage.textContent = "Please fill in all fields.";
    responseMessage.style.color = "red";
    return;
  }

  try {
    // 👇 Call your backend API (replace URL with your backend endpoint)
    const res = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      responseMessage.textContent = data.message || "Signup successful!";
      responseMessage.style.color = "green";
      form.reset();
    } else {
      responseMessage.textContent = data.message || "Something went wrong!";
      responseMessage.style.color = "red";
    }
  } catch (err) {
    responseMessage.textContent = "Server error. Try again later.";
    responseMessage.style.color = "red";
  }
});

// Toggle password visibility
togglePasswordCheckbox.addEventListener("change", function () {
  password.type = password.type === "password" ? "text" : "password";
});
