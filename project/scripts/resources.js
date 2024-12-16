const dropdownBtns = document.querySelectorAll(".toggle-btn");

dropdownBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    document.querySelectorAll(".toggle-content").forEach((item) => {
      if (item !== content) {
        item.style.maxHeight = null;
        item.style.padding = "0 10px";
      }
    });

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.padding = "0 10px";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = "1rem";
    }
  });
});
