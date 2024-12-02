const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Cape Town South Africa",
    location: "Cape Town, South Africa",
    dedicated: "2021, April, 4",
    area: 9500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/cape-town-south-africa-temple/cape-town-south-africa-temple-23847-thumb.jpg",
  },
  {
    templeName: "Austin Texas Temple",
    location: "Texas, United States",
    dedicated: "2024, August, 17",
    area: 30000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/austin-texas-temple/austin-texas-temple-40361-main.jpg",
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1853, February, 14",
    area: 382207,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg",
  },
  {
    templeName: "Kirtland Temple",
    location: "Kirtland Temple, Ohio, United States",
    dedicated: "1836, March, 27",
    area: 382207,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg",
  },
  {
    templeName: "Logan Utah Temple",
    location: "Logan, Utah, United States",
    dedicated: "1877, May, 18",
    area: 119619,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg",
  },
];

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const filterTitle = document.querySelector("#filterTitle");
const homeFilter = document.querySelector(".home");
const oldFilter = document.querySelector(".old");
const newFilter = document.querySelector(".new");
const largeFilter = document.querySelector(".large");
const smallFilter = document.querySelector(".small");
const cardContainer = document.querySelector("#cardContainer");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", () => {
  filterTitle.textContent = "Home";
  filterTemples("home");
});

homeFilter.addEventListener("click", () => {
  filterTitle.textContent = "Home";
  filterTemples("home");
});

oldFilter.addEventListener("click", () => {
  filterTitle.textContent = "Old";
  filterTemples("old");
});

newFilter.addEventListener("click", () => {
  filterTitle.textContent = "New";
  filterTemples("new");
});

largeFilter.addEventListener("click", () => {
  filterTitle.textContent = "Large";
  filterTemples("large");
});

smallFilter.addEventListener("click", () => {
  filterTitle.textContent = "Small";
  filterTemples("small");
});

const filterTemples = (param) => {
  if (param === "old") {
    cardContainer.innerHTML = "";
    const filtered = temples.filter((temple) => temple.dedicated < "1900");
    displayTemples(filtered);
  } else if (param === "new") {
    cardContainer.innerHTML = "";
    const filtered = temples.filter((temple) => temple.dedicated > "2000");
    displayTemples(filtered);
  } else if (param === "large") {
    cardContainer.innerHTML = "";
    const filtered = temples.filter((temple) => temple.area > 90000);
    displayTemples(filtered);
  } else if (param === "small") {
    cardContainer.innerHTML = "";
    const filtered = temples.filter((temple) => temple.area < 10000);
    displayTemples(filtered);
  } else if (param === "home") {
    cardContainer.innerHTML = "";
    displayTemples(temples);
  }
};

const displayTemples = (filteredTemples) => {
  filteredTemples.map((filteredTemple) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const size = document.createElement("p");
    const image = document.createElement("img");

    cardContainer.appendChild(card);

    cardTitle.textContent = filteredTemple.templeName;

    card.appendChild(cardTitle);
    card.appendChild(cardBody);

    location.innerHTML = `<span>LOCATION:</span> ${filteredTemple.location}`;
    cardBody.appendChild(location);

    dedicated.innerHTML = `<span>DEDICATED:</span> ${filteredTemple.dedicated}`;
    cardBody.appendChild(dedicated);

    size.innerHTML = `<span>SIZE:</span> ${filteredTemple.area} sq ft`;
    cardBody.appendChild(size);

    image.src = filteredTemple.imageUrl;
    image.alt = `${filteredTemple.templeName} Temple`;
    image.loading = "lazy";
    cardBody.appendChild(image);
  });
};
