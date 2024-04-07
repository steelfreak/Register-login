function login() {
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;

  // Perform login validation here (e.g., check against a database)

  // For demonstration purposes, let's display the login data in the console
  console.log("Login Email: " + email);
  console.log("Login Password: " + password);
}

function register() {
  var email = document.getElementById("register-email").value;
  var password = document.getElementById("register-password").value;

  // Perform registration logic here (e.g., store in a database)

  // For demonstration purposes, let's display the registration data in the console
  console.log("Register Email: " + email);
  console.log("Register Password: " + password);
}