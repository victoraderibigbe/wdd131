const wellnessTips = [
  "Take a 10-minute walk outside and focus on the sounds of nature to reset your mind and body.",
  "Drink a glass of water first thing in the morning to kickstart your metabolism.",
  "Dedicate 5 minutes a day to deep breathing exercises to reduce stress and improve focus.",
  "Turn off screens at least 30 minutes before bedtime for a better night's sleep.",
  "Stretch your body for 5 minutes to release tension and improve blood flow.",
  "Take a moment to write down 3 things you’re grateful for today.",
  "Swap sugary drinks for water or herbal tea to boost hydration.",
  "Listen to calming music or nature sounds to reset your mood during the day.",
  "Practice mindful eating: focus on your meal without distractions.",
  "Spend 10 minutes decluttering your workspace to clear your mind and improve focus.",
  "Take short breaks every hour to stand up, stretch, or move around.",
  "Start your day with a short, positive affirmation: 'Today, I choose to focus on what I can control.'",
  "Incorporate 20 minutes of physical activity, whether it’s a walk, yoga, or dancing.",
  "Avoid multitasking for an hour and focus on completing one task at a time.",
  "Schedule a short 'me-time' during your day to recharge mentally.",
  "Write down one goal for today and focus on accomplishing it.",
  "Take time to enjoy your meals—chew slowly and savor the flavors.",
  "Limit social media use for an hour to create mental space and reduce distractions.",
  "Spend 5 minutes looking out the window and appreciating nature.",
  "Organize your thoughts by jotting down tasks in a to-do list to feel more in control.",
];

const dropdownBtns = document.querySelectorAll(".toggle-btn");
const tipsBox = document.querySelector(".quick-tips");

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

// Function to get the day of the year
const getDayOfTheYear = () => {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff =
    today -
    startOfYear +
    (startOfYear.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

// Function to get today's quote and tip
const getDailyContents = () => {
  const day = getDayOfTheYear();
  const tipIndex = day % wellnessTips.length;

  return {
    tip: wellnessTips[tipIndex],
  };
};

const displayTip = () => {
  const { tip } = getDailyContents();

  const heading = document.createElement("h2");
  heading.textContent = "Quick Tips";
  tipsBox.appendChild(heading);

  const qElement = document.createElement("q");
  qElement.textContent = tip;
  tipsBox.appendChild(qElement);
};

displayTip();
