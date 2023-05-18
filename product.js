const data = [
  {
    image: "./assets/images/coffees/2.jpg",
    header: "Cappuccino",
    ingredient: "Coffee 50% | Milk 50%",
    button: "Order Now",
    price: "$8.50",
  },
  {
    image: "./assets/images/coffees/3.jpg",
    header: "Chai late",
    ingredient: "Coffee 45% | Milk 55%",
    button: "Order Now",
    price: "$7.50",
  },
  {
    image: "./assets/images/coffees/4.jpg",
    header: "Cappuccino",
    ingredient: "Coffee 35% | Milk 65%",
    button: "Order Now",
    price: "$9.50",
  },
  {
    image: "./assets/images/coffees/5.jpg",
    header: "Cappuccino",
    ingredient: "Coffee 70% | Milk 30%",
    button: "Order Now",
    price: "$10.50",
  },
  {
    image: "./assets/images/coffees/6.jpg",
    header: "Cappuccino",
    ingredient: "Coffee 70% | Milk 30%",
    button: "Order Now",
    price: "$9.50",
  },
];

const dynamicData = document.getElementById("coffee-cards");
dynamicData.classList.add("row");
dynamicData.classList.add("gap-4");
dynamicData.classList.add("mb-3");

const dynamicData1 = document.getElementById("coffee-cards1");
dynamicData1.classList.add("row");
dynamicData1.classList.add("gap-4");
dynamicData1.classList.add("mb-3");

for (i = 0; i < data.length; i++) {
  const card = document.createElement("div");
  card.classList.add("col-sm");
  card.classList.add("px-0");
  card.classList.add("overflow-hidden");
  card.classList.add("rounded-4");
  card.classList.add("custom_shadow");

  const image = document.createElement("img");
  image.classList.add("w-100");
  image.classList.add("object-fit-cover");
  image.classList.add("border-bottom");
  image.classList.add("border-dark");
  image.classList.add("card_image");
  image.src = data[i].image;

  var info = document.createElement("div");
  info.classList.add("px-4");
  info.classList.add("py-3");

  var infoTop = document.createElement("div");
  infoTop.classList.add("d-flex");
  infoTop.classList.add("w-100");
  infoTop.classList.add("mb-2");
  infoTop.classList.add("justify-content-between");
  infoTop.classList.add("align-items-center");

  var header = document.createElement("h1");
  header.classList.add("fs-5");
  header.innerHTML = data[i].header;

  var ingredient = document.createElement("h4");
  ingredient.classList.add("fs-6");
  ingredient.classList.add("w-normal");
  ingredient.classList.add("mb-4");
  ingredient.classList.add("mt-2");
  ingredient.classList.add("ingredient");
  ingredient.innerHTML = data[i].ingredient;

  var infoBottom = document.createElement("div");
  infoBottom.classList.add("d-flex");
  infoBottom.classList.add("justify-content-between");
  infoBottom.classList.add("align-items-center");

  var orderBtn = document.createElement("button");
  orderBtn.classList.add("main_btn");
  orderBtn.classList.add("border-0");
  orderBtn.classList.add("py-3");
  orderBtn.classList.add("px-4");
  orderBtn.innerHTML = data[i].button;

  var price = document.createElement("h2");
  price.classList.add("text-brown");
  price.classList.add("fs-5");
  price.classList.add("fw-regular");
  price.innerHTML = data[i].price;

  card.appendChild(image);
  card.appendChild(info);
  info.appendChild(infoTop);
  info.appendChild(ingredient);
  info.appendChild(infoBottom);
  infoTop.appendChild(header);
  infoBottom.appendChild(orderBtn);
  infoBottom.appendChild(price);

  dynamicData.appendChild(card);
  dynamicData1.appendChild(card);
}
