const myQuotes = [
  "Your mind is a garden; your thoughts are the seeds. Choose to grow flowers, not weeds.",
  "Happiness is not by chance, but by choice.",
  "Small steps every day lead to big changes over time.",
  "You can’t go back and change the beginning, but you can start where you are and change the ending.",
  "The mind is like water; when it’s turbulent, it’s difficult to see. When it’s calm, everything becomes clear.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "The best way to predict the future is to create it.",
  "What you think, you become. What you feel, you attract. What you imagine, you create.",
  "Be kind to your mind. Nurture it with positivity and purpose.",
  "When you can’t control what’s happening, challenge yourself to control how you respond.",
  "Your body hears everything your mind says. Stay positive, stay strong.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Don’t let the noise of others' opinions drown out your inner voice.",
  "You are the author of your story. Make it a great one.",
  "Believe in the power of now. Every moment is a chance to start anew.",
  "The more grateful you are, the more beauty you see.",
  "Feed your mind with thoughts that inspire and empower you.",
  "Your mindset determines your success. Stay focused, stay positive.",
  "Every day is a fresh start. Take a deep breath and begin again.",
];

const quoteBoxes = document.querySelectorAll(".quote-box");

const displayRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * myQuotes.length);

  quoteBoxes.forEach((quoteBox) => {
    const existingCta = quoteBox.querySelector(".cta");
    if (existingCta) {
      existingCta.remove(); // Remove existing .cta div
    }

    const divElement = document.createElement("div");
    divElement.classList.add("cta");

    const qElement = document.createElement("q");
    qElement.textContent = myQuotes[randomIndex];
    divElement.appendChild(qElement);
    quoteBox.appendChild(divElement);
  });
};

displayRandomQuote();

// Update quotes automatically every 30 seconds
setInterval(displayRandomQuote, 30000);

// ---------------------- Daily Log Form Capturing ----------------------
// Select DOM elements
const form = document.querySelector(".log-form");
const cardContainer = document.querySelector(".card-container");
const addBtn = document.querySelector("#addBtn");

// Load saved logs on page load
document.addEventListener("DOMContentLoaded", () => {
  loadLogs();
  recordEntries();
});

// Function to handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload on form submission

  // Get form data
  const date = document.querySelector("#date").value;
  const mood = document.querySelector("#mood").value;
  const activities = document.querySelector("input[name='activities']").value;
  const notes = document.querySelector("#notes").value;

  if (date && mood && activities) {
    // Create a log object
    const log = { date, mood, activities, notes };

    // Save to localStorage
    saveLog(log);

    // Update display
    renderLog(log);

    // Clear the form
    form.reset();
  }
});

// Function to save a log to localStorage
const saveLog = (log) => {
  // Retrieve existing logs or initialize an empty array
  const logs = JSON.parse(localStorage.getItem("logs")) || [];

  // Add the new log to the logs array
  logs.push(log);

  // Save back to localStorage
  localStorage.setItem("logs", JSON.stringify(logs));
};

// Function to load and display logs from localStorage
const loadLogs = () => {
  const logs = JSON.parse(localStorage.getItem("logs")) || [];
  cardContainer.innerHTML = ""; // Clear the container

  if (logs.length <= 0) {
    const noLogs = document.createElement("p");
    noLogs.textContent =
      "No logs found. Add a new one by filling out the form.";
    cardContainer.appendChild(noLogs);
    return;
  }

  logs.forEach((log) => {
    renderLog(log);
  });
};

// Function to render a single log dynamically
const renderLog = (log) => {
  // Create the card element
  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  card.appendChild(cardTitle);

  const mood = document.createElement("p");
  mood.textContent = `I'm ${log.mood}`;
  cardTitle.appendChild(mood);

  const date = document.createElement("i");
  date.classList.add("date");
  date.textContent = `${log.date}`;
  cardTitle.appendChild(date);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const activities = document.createElement("p");
  activities.textContent = `Activities: ${log.activities}`;
  cardBody.appendChild(activities);

  const notes = document.createElement("p");
  notes.textContent = `Notes: ${log.notes}`;
  cardBody.appendChild(notes);

  const cardOptions = document.createElement("div");
  cardOptions.classList.add("card-options");
  card.appendChild(cardOptions);

  const editBtn = document.createElement("button");
  editBtn.id = "editButton";
  editBtn.type = "button";
  editBtn.textContent = "Edit";
  cardOptions.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.id = "deleteButton";
  deleteBtn.type = "button";
  deleteBtn.textContent = "Delete";
  cardOptions.appendChild(deleteBtn);

  // Add delete functionality to the button
  card.querySelector("#deleteButton").addEventListener("click", () => {
    deleteLog(log);
    card.remove();
  });

  // Add edit functionality to the button
  editBtn.addEventListener("click", () => {
    editLog(log, card);
  });

  // Append the card to the container
  cardContainer.appendChild(card);
};

// Function to delete a log
const deleteLog = (logToDelete) => {
  const logs = JSON.parse(localStorage.getItem("logs")) || [];
  const updatedLogs = logs.filter(
    (log) =>
      log.date !== logToDelete.date ||
      log.mood !== logToDelete.mood ||
      log.activities !== logToDelete.activities
  );

  // Save updated logs back to localStorage
  localStorage.setItem("logs", JSON.stringify(updatedLogs));
};

const editLog = (logToEdit, cardElement) => {
  // Populate the form with existing log data
  document.querySelector("#date").value = logToEdit.date;
  document.querySelector("#mood").value = logToEdit.mood;
  document.querySelector("input[name='activities']").value =
    logToEdit.activities;
  document.querySelector("#notes").value = logToEdit.notes;

  // Remove the old log from localStorage
  deleteLog(logToEdit);
  cardElement.remove();

  // Update the "Add" button text to indicate editing
  addBtn.value = "Update Entry";

  // After updating the log, reset the button text
  form.addEventListener(
    "submit",
    () => {
      addBtn.value = "Add My Entry";
    },
    { once: true }
  );
};

const recordEntries = () => {
  const entriesBoxes = document.querySelectorAll(".quote-box .entries");

  entriesBoxes.forEach((entriesBox) => {
    const pElement = document.createElement("p");
    entriesBox.appendChild(pElement);

    const logs = JSON.parse(localStorage.getItem("logs")) || [];

    if (logs.length <= 0) {
      pElement.textContent = "You haven't logged in yet";
      pElement.style.fontSize = "1rem";
      pElement.style.fontWeight = 500;
      entriesBox.appendChild(pElement);
      return;
    }

    console.log(logs.length);
    pElement.textContent = logs.length;
    entriesBox.appendChild(pElement);
  });
};
