import { getData } from "./common";
import swal from "sweetalert";

let username = document.getElementById("user");
let loggedInUser = localStorage.getItem("username");
username.innerHTML = `User logged in as:${loggedInUser}`;

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
              console.log(meal.quantity);
              console.log(order.meals);
              if (order.completed === false) {
                document.getElementById("open").innerHTML += `<tr>
                      <td>${meal.meal_name}</td>
                      <td>${meal.quantity}</td>
                      <td>${order.created_at}</td>
                      <td>
                          <button onclick="getID(event)" id="acpt" data-id="${
                            order.order_id
                          }">Edit</button>
                      </td>
                  </tr>`;
              } else {
                document.getElementById("completed").innerHTML += `<tr>
                      <td>${meal.meal_name}</td>
                      <td>${meal.quantity}</td>
                      <td>${order.created_at}</td>
                      <td>
                          <button onclick="getID(event)" id="acpt" data-id="${
                            order.order_id
                          }">Edit</button>
                      </td>
                  </tr>`;
              }
            }
          }
        }
      }
    }
  });
