import { postData } from "./common";
import swal from "sweetalert";
import jwtDecode from "jwt-decode";

document.getElementById("loginform").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const data = {
    username: username,
    password: password
  };
  const url = "/users/signin";
  postData(url, data)
    .then(response => response.json())
    .then(response => {
      console.log(response);

      if (response.token) {
        const { roles, username } = jwtDecode(response.token);
        console.log(roles, username);
        localStorage.setItem("roles", roles);
        localStorage.setItem("username", username);
        localStorage.setItem("token", response.token);
        swal(response.message).then(() => {
          if (roles.includes("admin")) {
            window.location.href = "/admin_dashboard.html";
          } else if (roles.includes("superuser")){
            window.location.href = "/manage_users.html";
          } else {
            window.location.href = "/options.html";
          }
        });
      } else {
        swal({
          title: "Oops!",
          text: response.message,
          icon: "error"
        });
      }
    });
});
