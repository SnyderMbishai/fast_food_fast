import { getData } from "./common";
import swal from "sweetalert";

let username = document.getElementById("admin");
let loggedInAdmin = localStorage.getItem("username");
username.innerHTML = `Admin logged in as:${loggedInAdmin}`;

// getData all orders
let accessToken = localStorage.getItem("token");
let url = "/orders";

function completeOrder(event) {
  event.preventDefault();
  let id = event.currentTarget.dataset.id;
  let accessToken = localStorage.getItem("token");
  let url = `https://fastfoodfastapi1n2.herokuapp.com/api/v2/orders/${id}`;
  fetch(url, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json"
    }
  })
    .then(response => response.json())
    .then(response => {
      swal(response.message).then(() => {
        window.location.replace("accepted_orders.html");
      });
    });
}

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
              // console.log(meal.quantity);
              console.log(order.meals);
              console.log(meal.started);
              if (order.started === false) {
                // console.log(meal.started, "asdfghjklfghj");
                document.getElementById("new").innerHTML += `<tr>
                    <td>${order.username}</td>
                    <td>${meal.meal_name}</td>
                    <td>${meal.quantity}</td>
                    <td>${order.created_at}</td>
                    <td>
                        <button onclick="acceptOrder(event)" id="acpt" data-id="${
                          order.order_id
                        }">accept</button>
                        <button onclick="declineOrder(event)" id="decln" data-id="${
                          order.order_id
                        }">decline</button>
                    </td>
                </tr>`;
              } else {
                if (order.completed == false) {
                  if (order.accepted === true) {
                    document.getElementById("accepted").innerHTML += `<tr>
                    <td>${order.username}</td>
                    <td>${meal.meal_name}</td>
                    <td>${meal.quantity}</td>
                    <td>${order.created_at}</td>
                    <td>
                        <button onClick="completeOrder(event)" id="acpt" data-id="${
                          order.order_id
                        }">complete</button>

                    </td>
                </tr>`;
                  } else {
                    document.getElementById("rejected").innerHTML += `<tr>
                    <td>${order.username}</td>
                    <td>${meal.meal_name}</td>
                    <td>${meal.quantity}</td>
                    <td>${order.created_at}</td>
                    <td>
                        <button onClick="completeOrder(event)" id="acpt" data-id="${
                          order.order_id
                        }">complete</button>

                </tr>`;
                  }
                }
              }
            }
          }
        }
      }
    }
  });
