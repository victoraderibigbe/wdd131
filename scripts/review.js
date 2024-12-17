document.addEventListener("DOMContentLoaded", () => {
  const reviewCount = localStorage.getItem("reviewCount") || 0;
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  if (reviewCount > 0) {
    p1.textContent = "Thank you, your review have been received!";
    p2.textContent = `You have written ${reviewCount} review(s) so far.`;
  } else {
    p2.textContent = "You haven't written any reviews";
  }

  p2.style.marginTop = "1rem";
  document.querySelector(".feedback").appendChild(p1);
  document.querySelector(".feedback").appendChild(p2);
});
