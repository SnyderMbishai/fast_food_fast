import { postData } from "./common";
import swal from "sweetalert";
document.getElementById("signupform").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const password1 = document.getElementById("password1").value;

  if (password === password1 && password.length >= 8) {
    const url = "/users/signup";
    const data = {
      username: username,
      email: email,
      password: password,
      confirm_password: password1
    };
    postData(url, data)
      .then(response => response.json())
      .then(response => {
        const success = "User registration successful";
        if (response.message === success) {
          swal(response.message).then(() => {
            window.location.href = "/login.html";
          });
        } else {
          swal({
            title: "Oops!",
            text: response.message,
            icon: "error"
          });
        }
      });
  } else {
    swal("Ensure passwords match.");
  }
});
