import { getData } from "./common";
import swal from "sweetalert";
let username = document.getElementById("admin");
let loggedInAdmin = localStorage.getItem("username");
username.innerHTML = `Admin logged in as:${loggedInAdmin}`;

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
          document.getElementById("new").innerHTML += `<div class="fig" mealID="${meal.id}"><figure>
                      <img src="../static/images/3.jpg" alt="food option">
                      <figcaption>${meal.name}</figcaption>
                  </figure>
                  <p>price: ksh ${meal.price}</p>
                  <a href="edit.html">
                    <button id="edit">Edit</button>
                </a>
                <button onclick="confirmDel()" id="danger">Delete</button>
                  </div>`;
        }
      }
    }
  });
