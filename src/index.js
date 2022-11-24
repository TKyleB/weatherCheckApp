import {createHeader, createInputForm, createCityTitle, topSection, bottomSection, createButtonNaviation} from "./ui_builder.js"
import "./style.css"

const API_KEY = "9e2784936f680d48653338cba21190e3"
let temp_units = "F"
let pressure_units = "hPa"
let speed_units = "mph"

const root = document.getElementById("root");

const buildHomePage = (error) => {
    root.innerHTML = ""
    root.append(createHeader(), createInputForm(error))

    const goButton = document.getElementById("go")
    goButton.addEventListener("click", (e) => {
        e.preventDefault()
        const location = document.getElementById("location")
        getWeatherData(null, location.value)
    })

    const locationButton = document.getElementById("locationButton")
    locationButton.addEventListener("click", (e) => {
        e.preventDefault()
        navigator.geolocation.getCurrentPosition(getGPSLocation)
        
        async function getGPSLocation(pos) {
            await getWeatherData(pos, null)
        }
    })
}

const buildWeatherPage = (locationName, feelsLikeValue, temperatureValue, weatherDescription, temperatureMinValue, temperatureMaxValue, humidityValue, windSpeedValue, pressureValue, tempUnits) => {
    root.innerHTML = ""
    const border = document.createElement("div")
    border.classList.add("border", "border-1")
    const mainContent =  document.createElement("section")
    mainContent.classList.add("main-content")
    border.append(
        topSection(temperatureValue, titleCase(weatherDescription), tempUnits),
        bottomSection(Math.round(parseInt(feelsLikeValue)), pressureValue, Math.round(parseInt(temperatureMinValue)), humidityValue,Math.round(parseInt(temperatureMaxValue)), windSpeedValue, temp_units, pressure_units, speed_units),
        createButtonNaviation())
    mainContent.append(border)

    root.append(
        createHeader(),
        createCityTitle(locationName),
        mainContent)

    const resetButton = document.getElementById("reset")
    resetButton.addEventListener("click", (e) => {
        e.preventDefault()
        buildHomePage()

    })

}

const titleCase = (string) => {
    return string.split(" ").map(s => s[0].toUpperCase() + s.substring(1)).join(" ")
}

async function getWeatherData(coords, city) {
    if (coords) {
        const crd = coords
        console.log(crd)
        const response = await (fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.coords.latitude}&lon=${crd.coords.longitude}&units=imperial&appid=${API_KEY}`))
        const data = await response.json()
        buildWeatherPage(data.name, data.main.feels_like, data.main.temp, data.weather[0].description, data.main.temp_min, data.main.temp_max, data.main.humidity, data.wind.speed, data.main.pressure, temp_units)
    }
    else {
        const response = await (fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`))
        if (!response.ok) {
            buildHomePage(true)
        }
        else {
            const data = await response.json()
            buildWeatherPage(data.name, data.main.feels_like, data.main.temp, data.weather[0].description, data.main.temp_min, data.main.temp_max, data.main.humidity, data.wind.speed, data.main.pressure, temp_units)
        }

    }

}

buildHomePage()