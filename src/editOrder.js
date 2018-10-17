import { putData } from "./common";
import { getData } from "./common";
import swal from "sweetalert";

let order_id = sessionStorage.getItem("orderId");
let accessToken = localStorage.getItem("token");
let url1 = `/orders/${order_id}`;
let url2 = "/orders";

// get order to be edited
getData(url1, accessToken)
  .then(response => response.json())
  .then(response => {
    if (response) {
      let order = response["order"];
      let meals = order.meals;
      for (let i in meals) {
        if (meals.hasOwnProperty(i)) {
          let meal = meals[i];
          let meal_id = meal.meal_id;

          document.getElementById("orderEdit").innerHTML += `<tr>


                  <td>${meal.meal_name}<td>
                  <td> ${meal.quantity}</td>
                  <tr>
                  <td>
                    <form id="eorder">
                      <input placeholder="new quantity" id="nquantity" required>
                      <button id="submit" type="submit" >Edit order</button>
                    </form>
                  </td>
                  </tr>
                  </tr>`;
          // edit order
          document
            .getElementById("eorder")
            .addEventListener("submit", function(e) {
              e.preventDefault();
              const quantity = document.getElementById("nquantity").value;
              console.log(quantity);
              let dict = {};
              dict[meal_id] = quantity;
              console.log(dict);
              const newData = { new_data: { meals_dict: dict } };
              console.log(newData);
              console.log(accessToken);
              // const data = {
              //   meal_dict: dict
              // };
              putData(url1, accessToken, newData)
                .then(response => response.json())
                .then(response => {
                  console.log(response);
                  if (response) {
                    swal(response.message).then(() => {
                      window.location.href = "/order_history.html";
                    });
                  }
                  swal(response.message).then(() => {
                    window.location.href = "/order_history.html";
                  });
                });
            });
        }
      }
    }
  });
