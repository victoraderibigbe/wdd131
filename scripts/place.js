const temperature = 24;
const windSpeed = 3;

const calculateWindChill = (temp, speed) => {
  // Formula: Wind Chill = 13.12 + 0.6215T - 11.37V^0.16 + 0.3965T * V^0.16
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  );
};

if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed).toFixed(1);

  document.addEventListener("DOMContentLoaded", () => {
    const weatherList = document.querySelector(".details .weather ul");
    const windChillElement = document.createElement("li");
    windChillElement.innerHTML = `<span>Wind Chill:</span> ${windChill} °C`;
    weatherList.appendChild(windChillElement);
  });
} else {
  document.addEventListener("DOMContentLoaded", () => {
    const weatherList = document.querySelector(".details .weather ul");
    const noWindChillElement = document.createElement("li");
    noWindChillElement.innerHTML = `<span>Wind Chill:</span> N/A`;
    weatherList.appendChild(noWindChillElement);
  });
}
