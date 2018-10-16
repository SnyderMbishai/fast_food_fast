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
              console.log(meal.quantity);

              console.log(order.meals);
              document.getElementById("new").innerHTML += `<tr>
                    <td>${order.username}</td>
                    <td>${meal.meal_name}</td>
                    <td>${meal.quantity}</td>
                    <td>${order.created_at}</td>
                    <td>
                        <button onclick="confirmAction()" id="acpt">accept</button>
                        <button onclick="confirmAction()" id="decln">decline</button>
                    </td>
                </tr>`;
              // document.getElementById(
              //   "new"
              // ).innerHTML += `<div class="fig" "><figure>
              //             <img src="../static/images/3.jpg" alt="food option">
              //             <figcaption>${meal.name}</figcaption>
              //         </figure>
              //         <p>price: ksh ${meal.price}</p>
              //         <a href="edit.html">
              //           <button id="edit" onClick="getID(event)" data-id="${
              //             meal.id
              //           }">Edit</button>
              //       </a>
              //       <button onClick="delMeal(event)" data-id="${
              //         meal.id
              //       }" id="danger" >Delete</button>
              //         </div>`;
            }
          }
        }
      }
    }
  });

// function delMeal(event) {}
