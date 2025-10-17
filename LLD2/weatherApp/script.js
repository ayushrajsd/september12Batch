// /**
//  *
//  * 1. JSON
//  * 2. API
//  * 3. Weather App
//  *
//  *
//  * JSON - Javascript Object Notation
//  *  - common mode of exchanging information
//  *  - {} , []
//  *  - keys - should be wrapped in quotes
//  *  - values - text, numbers, boolean., arrays, objects, null
//  *  - what are other ways of exchanging information other than JSON
//  *
//  */

// const toys = {
//   toy1: { name: "Teddy Bear", color: "Brown" },
//   toy2: { name: "Race Car", color: "Red" },
//   toy3: { name: "Dol", color: "Pink" },
// };

// const packedToys = JSON.stringify(toys);
// console.log(packedToys);

// const obj = JSON.parse(packedToys); // converting back to JS object
// console.log(obj);

// /**
//  *
//  * API: application Programing Interface
//  *
//  */

const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".city");
const timeField = document.querySelector(".localtime");
const conditionField = document.querySelector(".weather_condition span");
const conditionIcon = document.querySelector(".weather_condition img");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

function formatTime(localtime) {
  const [date, time] = localtime.split(" ");
  const day = getDayName(date);
  return `${time} ${day}, ${date}`;
}

function getDayName(date) {
  const dayIndex = new Date(date).getDay();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[dayIndex];
}

function updateDOM(data) {
  // const location = data.location
  // const current = data.current;
  const { location, current } = data; // object destructuring
  temperatureField.textContent = `${current.temp_c}°C`;
  cityField.textContent = location.name;
  timeField.textContent = formatTime(location.localtime);
  conditionField.textContent = current.condition.text;
  conditionIcon.src = `https:${current.condition.icon}`;
  conditionIcon.alt = current.condition.text;
}

async function fetchWeatherData(city) {
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=e87dc6e07f254adca2b103930242003&q=${city}&aqi=yes`;
    const response = await fetch(url); // we get back a Response object
    if (!response.ok) {
      // status code was between 200-299 or not
      throw new Error("City not found or invalid response");
    }
    const data = await response.json(); // JSON.parse
    console.log("Fetched data", data);
    updateDOM(data);
  } catch (error) {
    console.error("Error fetching data", error.message);
    alert(
      "Unable to fetch weather data. Please try after some time or with a different name"
    );
  }
}

searchForm.addEventListener("submit", function (event) {
  // some step here
  event.preventDefault(); // prevent reloading the page

  const city = searchInput.value.trim();
  if (city === "") {
    alert("Please enter a city name");
    return;
  }
  fetchWeatherData(city);
  searchInput.value = "";
});

// fetchWeatherData("Pune");

/**
 * addEventListener("click",function(){
 * })
 *
 *
 *
 *
 *
 *
 */

// function cachingFunction(complexCalculation) {
//   // Modify this cache object and store data in the arg
//   // also perform the complexCalculation on the arg
//   //window.cache = {};
//   const cache = {};
//   // Implement the closure-based caching mechanism here
//   return function (arg) {
//     // const cache = {};
//     return function (arg) {
//       if (cache[arg] != undefined) {
//         return cache[arg];
//       }
//       const result = complexCalculation(arg);
//       cache[arg] = result;
//       return result;
//     };
//   };
// }
// const look = cachingFunction(squares);
// look(10);
// look(10);
