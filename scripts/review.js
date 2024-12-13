document.addEventListener("DOMContentLoaded", () => {
  let numReviews = parseInt(localStorage.getItem("numReviews")) || 0;
  numReviews++;
  localStorage.setItem("numReviews", numReviews);
});
