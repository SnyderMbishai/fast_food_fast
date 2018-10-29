import { postData } from "./common";
import swal from "sweetalert";

document.getElementById("newMealForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("mealName").value;
  const price = document.getElementById("price").value;
  let img = document.getElementById("img").value;
  img = img.substring(img.lastIndexOf("\\") + 1, img.length);
  console.log(img.substring(img.lastIndexOf("\\") + 1, img.length, 362));

  const data = {
    name: name,
    price: price,
    img: img
  };
  const url = "/meals";
  let accessToken = localStorage.getItem("token");
  postData(url, data, accessToken)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      if (response) {
        swal(response.message).then(() => {
          if (response.message === "Meal successfully added.") {
            // document.getElementById("new").innerHTML += `<div><figure>
            //         <img src="../static/images/3.jpg" alt="food option">
            //         <figcaption>${response.name}</figcaption>
            //     </figure>
            //     <p>price:${response.price}</p></div>`;
            window.location.href = "/admin_dashboard.html";
          }
          window.location.href = "/admin_dashboard.html";
        });
      }
      // window.location.href("./admin_dashboard.html");
    });
});
