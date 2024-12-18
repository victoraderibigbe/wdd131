const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

const productList = document.querySelector("#product");

const getProducts = () => {
  products.forEach((product) => {
    const op = document.createElement("option");
    op.textContent = product.name;
    op.value = product.name;
    productList.appendChild(op);
  });
};

document.addEventListener("DOMContentLoaded", () => getProducts());

document.querySelector(".product-form").addEventListener("submit", (event) => {
  event.preventDefault();

  let reviewCount = localStorage.getItem("reviewCount");
  reviewCount = reviewCount ? parseInt(reviewCount, 10) : 0;

  reviewCount += 1;

  localStorage.setItem("reviewCount", reviewCount);

  window.location.href = "review.html";
});
