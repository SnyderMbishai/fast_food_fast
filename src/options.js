import { getData } from "./common";
import swal from "sweetalert";

let username = document.getElementById("user");
let loggedInUser = localStorage.getItem("username");
username.innerHTML = `Logged in as:${loggedInUser}`;

// getData all meals
let accessToken = localStorage.getItem("token");
let url = "/meals";
getData(url, accessToken)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    if (response) {
      let meals = response["meals"];
      console.log(meals);
      for (let i in meals) {
        if (meals.hasOwnProperty(i)) {
          let meal = meals[i];
          document.getElementById(
            "new"
          ).innerHTML += `<div class="fig" "><figure>
                      <img src="../static/images/3.jpg" alt="food option">
                      <figcaption>${meal.name}</figcaption>
                  </figure>
                  <p>price: ksh ${meal.price}</p>
                  <input type="submit" onClick="getID(event)" value="Order" data-id="${
                    meal.id
                  }">
                  </div>`;
        }
      }
    }
  });
