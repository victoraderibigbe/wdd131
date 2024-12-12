const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const getChapterList = () => JSON.parse(localStorage.getItem("myFavBOMList"));

let chaptersArray = getChapterList() || [];

button.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
  }
});

const displayList = (item) => {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  li.textContent = item;
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete");

  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
};

chaptersArray.forEach((chapter) => displayList(chapter));

const setChapterList = () =>
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));

const deleteChapter = (chapter) => {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
};
