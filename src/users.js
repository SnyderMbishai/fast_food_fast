import { getData } from "./common";
import swal from "sweetalert";

let username = document.getElementById("super");
let loggedIn = localStorage.getItem("username");
username.innerHTML = `Superuser logged in as:${loggedIn}`;

// get all users
let accessToken = localStorage.getItem("token");
let url = "/users/manage/";
getData(url, accessToken)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    if (response) {
      let users = response["users"];
      console.log(users);
      for (let i in users) {
        if (users.hasOwnProperty(i)) {
          let user = users[i];
          let roles = user.roles;
          // display admins
          if (roles.includes("admin")) {
            document.getElementById("admins").innerHTML += `<tr>
                    <td>${user.username}</td>
                    <td>${user.roles}</td>
                    <td>
                        <button onclick="demoteUser(event)" id="acpt" data-id="
                          order">demote</button>
                        <button onclick="deleteUser(event)" id="decln" data-id="
                          order.order_id
                        ">delete</button>
                    </td>
                </tr>`;
            console.log(">>>>>>>1");
            // display superusers
          } else if (roles.includes("superuser")) {
            console.log(">>>>>>>2");
            document.getElementById("superuser").innerHTML += `<tr>
                    <td>${user.username}</td>
                    <td>${user.roles}</td>
                </tr>`;

            // display ordinary users
          } else {
            console.log(user.id, ">>>>>>>3");
            document.getElementById("users").innerHTML += `<tr>
                    <td>${user.username}</td>
                    <td>${user.roles}</td>
                    <td>
                        <button onClick="promoteUser(event)"  data-id="${user.id}" id="acpt">promote</button>
                        <button onClick="deleteUser(event)" id="decln" data-id="
                          order.order_id
                        ">delete</button>
                    </td>
                </tr>`;
          }
        }
      }
    }
  });
