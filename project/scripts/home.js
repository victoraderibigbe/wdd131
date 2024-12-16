const quotes = [
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

const tips = [
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

const wellnessTipElement = document.querySelector(".wellness-tip");

// Function to get the day of the year
const getDayOfYear = () => {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff =
    today -
    startOfYear +
    (startOfYear.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

// Function to get today's quote and tip
const getDailyContent = () => {
  const day = getDayOfYear();
  const quoteIndex = day % quotes.length; // Wrap around the array length
  const tipIndex = day % tips.length;

  return {
    quote: quotes[quoteIndex],
    tip: tips[tipIndex],
  };
};

// Display the content
const displayDailyContent = () => {
  const { quote, tip } = getDailyContent(); // Destructure to extract quote and tip from function

  const heading = document.createElement("h2");
  heading.textContent = "Daily Wellness Tip";
  wellnessTipElement.appendChild(heading);

  const quoteElement = document.createElement("q");
  quoteElement.textContent = quote;
  wellnessTipElement.appendChild(quoteElement);

  const tipElement = document.createElement("p");
  tipElement.textContent = tip;
  wellnessTipElement.appendChild(tipElement);
};

// Initialize
displayDailyContent();
