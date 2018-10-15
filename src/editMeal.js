import { putData } from "./common";
import swal from "sweetalert";

document.getElementById("editMealForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("newName").value;
  const price = document.getElementById("newPrice").value;
  let mealId = sessionStorage.getItem("mealId");
  console.log(mealId);

  const data = {
    name: name,
    price: price
  };
  console.log(data);
  let accessToken = localStorage.getItem("token");
  const url = `/meals/${mealId}`;
  putData(url, accessToken, data)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      if (response.message === "Meal has been updated successfully.") {
        swal(response.message).then(() => {
          window.location.href = "/admin_dashboard.html";
        });
      } else {
        swal(response.message).then(() => {
          window.location.href = "/edit.html";
        });
      }
    });
});
