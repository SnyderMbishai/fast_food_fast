import { getData } from "./common";
import swal from "sweetalert";

let username = document.getElementById("admin");
let loggedInAdmin = localStorage.getItem("username");
username.innerHTML = `Admin logged in as:${loggedInAdmin}`;

// getData all orders
let accessToken = localStorage.getItem("token");
let url = "/orders";
getData(url, accessToken)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    if (response) {
      let orders = response["orders"];
      console.log(orders);
      for (let i in orders) {
        if (orders.hasOwnProperty(i)) {
          let order = orders[i];
          // meal properties
          let meals = order.meals;
          for (let i in meals) {
            if (meals.hasOwnProperty(i)) {
              let meal = meals[i];
              if (order.completed === true) {
                console.log("Aye");
                document.getElementById("accepted").innerHTML += `<tr>
                      <td>${order.username}</td>
                      <td>${meal.meal_name}</td>
                      <td>${meal.quantity}</td>
                      <td>${order.created_at}</td>
                  </tr>`;
              }
            }
          }
        }
      }
    }
  });
