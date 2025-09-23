// FOOTER
// get year
const currentYear = new Date().getFullYear();

// last modified Date
const date = new Date('2025-09-23 01:23:34');
const options = {
  hour12: false,
};
const lastModifiedDate = date.toLocaleString('en-US', options);

// find span elements and insert dates
const currentYearSpan = document.getElementById('currentyear');
currentYearSpan.textContent = currentYear;

const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = `Last Modified: ${lastModifiedDate}`;

// WEATHER
const countryTempUnit = '°C';
const speedUnit = 'km/h';
const temperature = 24;
const windSpeed = 10;
let windChill = 'N/A';

if (temperature < 10 && windSpeed >= 4.8) {
  windChill = calculateWindChill(temperature, windSpeed);
}

function calculateWindChill(temperature, windSpeed) {
  console.log(temperature, windSpeed);
  return (
    13.12 +
    0.6215 * temperature -
    11.37 * windSpeed ** 0.16 +
    0.3965 * temperature * windSpeed ** 0.16
  );
}

// inser wind chill
const windChillParagraph = document.getElementById('wind-chill');
// windchill will be either rounded or NaN (falsy)
const roundWindChill = Math.round(windChill);
console.log(roundWindChill);
windChillParagraph.innerHTML = roundWindChill ? `${roundWindChill}${countryTempUnit}` : windChill;

// insert temperature
const tempParagraph = document.getElementById('temperature');
tempParagraph.innerHTML = temperature + countryTempUnit;

// insert wind speed
const windSpeedParagraph = document.getElementById('wind-speed');
windSpeedParagraph.innerHTML = windSpeed + speedUnit;
