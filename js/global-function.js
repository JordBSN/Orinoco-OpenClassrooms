// Déclaration des variables
const url = "http://localhost:3000/api/cameras";
let basketContent = JSON.parse(localStorage.getItem("cameras")) || [];
var total = 0;


// preview du panier dans la nav
function basketPreview() {
  if (basketContent.length == 0) {
  } else {
    let calculBasketPreview = 0;
    for (var product of basketContent) {
      calculBasketPreview += product.quantity;
    }
    document.getElementById("nombreProduct").textContent =
      "(" + `${calculBasketPreview}` + ")";
  }
}

// function calcul du total
function totalCalculPrice() {
  for (i = 0; i < basketContent.length; i++) {
    total += (basketContent[i].price * basketContent[i].quantity) / 100;
  }
}
