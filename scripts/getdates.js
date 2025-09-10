// get year
const currentYear = new Date().getFullYear();

// last modified Date
const date = new Date('2025-09-06 10:56:34');
const options = {
  hour12: false,
};
const lastModifiedDate = date.toLocaleString('en-US', options);

// find span elements and insert dates
const currentYearSpan = document.getElementById('currentyear');
currentYearSpan.textContent = currentYear;

const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = `Last Modified: ${lastModifiedDate}`;
