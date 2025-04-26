document.getElementById("getWeather").addEventListener("click", getWeather);
async function getWeather() {
 try {
  let key = "641cdc6299a2aab8cae520d20a660da2";
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    const data = await res.json();
    console.log(data);
    if (data.cod !== 200) {
      throw new Error(data.message);  // If the city isn't found, show the error message
    }

    displayWeather(data);
  } catch (error) {
    console.error("Error fetching weather:", error);
    document.getElementById("weather").innerText = `Error: ${error.message}`;
  }
}
