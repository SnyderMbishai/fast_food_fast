import { postData } from "./common";
import { getData } from "./common";
import swal from "sweetalert";

let meal_id = sessionStorage.getItem("mealId");
let accessToken = localStorage.getItem("token");
let url1 = `/meals/${meal_id}`;
let url2 = "/orders";

// get meal to be ordered
getData(url1, accessToken)
  .then(response => response.json())
  .then(response => {
    if (response) {
      let meal = response["meal"];
      document.getElementById("new").innerHTML += `<div class="fig" "><figure>
                      <img src="../static/images/${meal.img_name}" alt="food option">
                      <figcaption>${meal.name}</figcaption>
                  </figure>
                  <p>price: ksh ${meal.price}</p>
                  <form id="order">
                  <input placeholder="Quantity" id="quantity" required>
                  <button id="submit" type="submit" >place order</button>
                  </form>
                  </div>`;
      // place order
      document.getElementById("order").addEventListener("submit", function(e) {
        e.preventDefault();
        const quantity = document.getElementById("quantity").value;
        console.log(meal_id);
        let dict = {};
        dict[meal_id] = quantity;
        console.log(dict);
        const data = {
          meal_dict: dict
        };
        postData(url2, data, accessToken)
          .then(response => response.json())
          .then(response => {
            console.log(response);
            if (response) {
              swal(response.message).then(() => {
                window.location.href = "/options.html";
              });
            }
            window.location.href("./options.html");
          });
      });
    }
  });
