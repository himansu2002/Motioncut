document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Simple validation example
    if (username === "" || email === "" || password === "") {
        alert("Please fill in all fields");
        return false;
    }

    // Additional validation logic can be added here
    // For example, validating email format, password strength, etc.

    // If all validation passes, you can submit the form
    alert("Form submitted successfully!");
    document.getElementById("registrationForm").reset();
}
