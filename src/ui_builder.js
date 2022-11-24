
const createHeader = () => {
    const header = document.createElement("header");
    header.classList.add("text-center");
    const title = document.createElement("h1");
    title.textContent = "weatherCheckApp";
    header.appendChild(title);
    return header
}

const createLocationButton = () => {
    const locationButton = document.createElement("button");
    locationButton.id = "locationButton"
    const locationIcon = document.createElement("i");
    locationIcon.classList.add("bi", "bi-geo-alt-fill");
    locationButton.classList.add("btn", "btn-secondary");
    locationButton.appendChild(locationIcon);
    return locationButton
}

const createSubmitButton = () => {
    const submitButton = document.createElement("button");
    submitButton.classList.add("btn", "btn-primary");
    submitButton.id = "go"
    submitButton.textContent = "Go"
    return submitButton
}

const createInputForm = (error) => {
    const section = document.createElement("section");
    section.classList.add("row", "justify-content-md-center");
    const form = document.createElement("form");
    form.classList.add("col", "col-md-6")

    const div = document.createElement("div");
    div.classList.add("input-group", "mb-3");

    const input = document.createElement("input");
    input.classList.add("form-control");
    input.type = "text";
    input.name = "location";
    input.id = "location";
    input.placeholder = "Enter your Location";

    const locationButton = createLocationButton()

    const submitButton = createSubmitButton()
    

    div.appendChild(input)
    div.appendChild(locationButton)
    div.appendChild(submitButton)
    form.appendChild(div)
    if (error) {
        const errormessage = document.createElement("div")
        errormessage.classList.add("text-center")
        errormessage.classList.add("alert", "alert-danger")
        errormessage.textContent = "There was an error! Try Again"
        form.append(errormessage)
    }
    section.appendChild(form)


    return section;
}

const createCityTitle = (cityName) => {
    const section = document.createElement("section");
    section.classList.add("row", "justify-content-center", "text-center")
    const h2 = document.createElement("h2")
    h2.classList.add("col-8", "col-md-9", "col-lg-12")
    h2.textContent = `Current weather in ${cityName}`
    section.appendChild(h2)
    return section
}
const topSectionVStack = () => {
    const vstack = document.createElement("div")
    vstack.classList.add("vstack", "text-center", "border-end", "border-bottom", "px-3")
    return vstack
}

const createH5 = (text) => {
    const h5 = document.createElement("h5")
    h5.classList.add("m-0")
    h5.textContent = text
    return h5
}

const topSection = (temperature, currentConditions, units) => {
    const div = document.createElement("div")
    div.classList.add("d-flex", "justify-content-center", "align-items-center")
    const vstack1 = topSectionVStack()

    const temperature_text = createH5("Temperature")
    const span = document.createElement("span")
    span.textContent = temperature + " " + units
    vstack1.append(temperature_text, span)

    const conditions_text = createH5("Current Conditions");
    const vstack2 = topSectionVStack()
    vstack2.append(conditions_text, document.createElement("span").textContent = currentConditions)
    
    div.append(vstack1, vstack2)

    
    return div 
}

const createDataVStack = () => {
    const vstack = document.createElement("div")
    vstack.classList.add("vstack", "text-center")
    return vstack
}

const createTitleDataSpan = (text) => {
    const span = document.createElement("span")
    span.classList.add("mb-4", "mt-2")
    span.textContent = text
    return span
}

const createDataSpan = (text, units) => {
    const span = document.createElement("span")
    span.textContent = text + " " + units
    return span
}

const bottomSection = (feelsLikeValue, pressureValue, minTempValue, humidityValue, maxTempValue, windSpeedValue, temp_units, pressure_units, speed_units) => {
    const div = document.createElement("div")
    div.classList.add("d-flex", "gap-5", "px-3")
    const vstack1 = createDataVStack()

    const feelsLike = createTitleDataSpan("Feels Like: ")
    feelsLike.append(createDataSpan(feelsLikeValue, temp_units))
    vstack1.append(feelsLike)

    const pressure = createTitleDataSpan("Pressure: ")
    pressure.append(createDataSpan(pressureValue, pressure_units))
    vstack1.append(pressure)

    const vstack2 = createDataVStack()
    const minTemp = createTitleDataSpan("Min Temp: ")
    minTemp.append(createDataSpan(minTempValue, temp_units))
    vstack2.append(minTemp)

    const humidity = createTitleDataSpan("Humidity: ")
    humidity.append(createDataSpan(humidityValue, "%"))
    vstack2.append(humidity)

    const vstack3 = createDataVStack()
    const maxTemp = createTitleDataSpan("Max Temp: ")
    maxTemp.append(createDataSpan(maxTempValue, temp_units))
    vstack3.append(maxTemp)

    const windSpeed = createTitleDataSpan("Wind Speed: ")
    windSpeed.append(createDataSpan(windSpeedValue, speed_units))
    vstack3.append(windSpeed)


    div.append(vstack1, vstack2, vstack3)
    return div
}

const createNavButton = (text, type, id) => {
    const button = document.createElement("button")
    button.classList.add("btn", type, "w-100")
    button.id = id
    button.textContent = text
    return button
}

const createButtonNaviation = () => {
    const div = document.createElement("div")
    div.classList.add("d-flex", "justify-content-center", "gap-2", "m-2")
    div.append(createNavButton("New City?", "btn-success", "reset"))
    return div
}

export {
    createHeader,
    createInputForm,
    createCityTitle,
    topSection,
    bottomSection,
    createButtonNaviation
};
