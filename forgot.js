const currentPasswords = ["password1", "password2", "password3"];

document.getElementById('btn').addEventListener("click", function() {
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!currentPasswords.includes(currentPassword)) {
        alert("Current password is incorrect.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match.");
        return;
    }

    alert("Password Changed Successfully");
});

