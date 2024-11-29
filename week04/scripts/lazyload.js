const images = document.querySelectorAll("img");

images.forEach((img, index) => {
  img.style.animationDelay = `${index * 0.5}s`;
});
