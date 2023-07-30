let celciusInput = document.querySelector('.celcuis > input');
let fahrenheitInput = document.querySelector('.fahrenheit > input');
let kelvinInput = document.querySelector('.Kelvin > input'); // Corrected the class selector for Kelvin

let btn = document.querySelector('.button button');

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

function updateTemperaturesFromCelsius() {
    let cTemp = parseFloat(celciusInput.value);
    let fTemp = (cTemp * 9 / 5) + 32;
    let kTemp = cTemp + 273.15;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
}

function updateTemperaturesFromFahrenheit() {
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32) * 5 / 9;
    let kTemp = (fTemp - 32) * 5 / 9 + 273.15;

    celciusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
}

function updateTemperaturesFromKelvin() {
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * 9 / 5 + 32;

    celciusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
}

celciusInput.addEventListener('input', updateTemperaturesFromCelsius);
fahrenheitInput.addEventListener('input', updateTemperaturesFromFahrenheit);
kelvinInput.addEventListener('input', updateTemperaturesFromKelvin);

btn.addEventListener('click', () => {
    celciusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
});