// Footer dates
const currentYear = new Date().getFullYear();

const date = new Date('2025-09-06 10:56:34');
const options = {
  hour12: false,
};
const lastModifiedDate = date.toLocaleString('en-US', options);

const currentYearSpan = document.getElementById('currentyear');
currentYearSpan.textContent = currentYear;

const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = `Last Modified: ${lastModifiedDate}`;

// Hamburger Menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('open');
  hambutton.classList.toggle('open');
});

// Temples info
const temples = [
  {
    templeName: 'Aba Nigeria',
    location: 'Aba, Nigeria',
    dedicated: '2005, August, 7',
    area: 11500,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg',
  },
  {
    templeName: 'Manti Utah',
    location: 'Manti, Utah, United States',
    dedicated: '1888, May, 21',
    area: 74792,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg',
  },
  {
    templeName: 'Payson Utah',
    location: 'Payson, Utah, United States',
    dedicated: '2015, June, 7',
    area: 96630,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg',
  },
  {
    templeName: 'Yigo Guam',
    location: 'Yigo, Guam',
    dedicated: '2020, May, 2',
    area: 6861,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg',
  },
  {
    templeName: 'Washington D.C.',
    location: 'Kensington, Maryland, United States',
    dedicated: '1974, November, 19',
    area: 156558,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg',
  },
  {
    templeName: 'Lima Perú',
    location: 'Lima, Perú',
    dedicated: '1986, January, 10',
    area: 9600,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg',
  },
  {
    templeName: 'Mexico City Mexico',
    location: 'Mexico City, Mexico',
    dedicated: '1983, December, 2',
    area: 116642,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg',
  },
  {
    templeName: 'Papeete Tahiti',
    location: 'Commune de Papeete, Tahiti',
    dedicated: '1983, October, 29',
    area: 12150,
    imageUrl:
      'https://churchofjesuschristtemples.org/assets/img/temples/papeete-tahiti-temple/papeete-tahiti-temple-52883.jpg',
  },
  {
    templeName: 'Vancouver British Columbia Temple',
    location: 'Langley, British Columbia',
    dedicated: '2010, May, 2',
    area: 28165,
    imageUrl:
      'https://churchofjesuschristtemples.org/assets/img/temples/vancouver-british-columbia-temple/vancouver-british-columbia-temple-13064-main.jpg',
  },
  {
    templeName: 'Salvador Brazil Temple',
    location: 'Salvador, Brazil',
    dedicated: '2024, October, 20',
    area: 29963,
    imageUrl:
      'https://churchofjesuschristtemples.org/assets/img/temples/salvador-brazil-temple/salvador-brazil-temple-51668-main.jpg',
  },
];

createTempleCard(temples);

// create filters event listeners
const home = document.getElementById('home');
const old = document.getElementById('old');
const newer = document.getElementById('new');
const large = document.getElementById('large');
const small = document.getElementById('small');

home.addEventListener('click', () => {
  createTempleCard(temples);
});

old.addEventListener('click', () => {
  const filteredTemples = temples.filter((temple) => {
    let dedicationYear = temple.dedicated.split(',')[0].trim();
    dedicationYear = Number(dedicationYear);
    return dedicationYear < 1900;
  });
  createTempleCard(filteredTemples);
});

newer.addEventListener('click', () => {
  const filteredTemples = temples.filter((temple) => {
    let dedicationYear = temple.dedicated.split(',')[0].trim();
    dedicationYear = Number(dedicationYear);
    return dedicationYear > 2000;
  });
  createTempleCard(filteredTemples);
});

large.addEventListener('click', () => {
  const filteredTemples = temples.filter((temple) => temple.area > 90000);
  createTempleCard(filteredTemples);
});

small.addEventListener('click', () => {
  const filteredTemples = temples.filter((temple) => temple.area < 10000);
  createTempleCard(filteredTemples);
});

function createTempleCard(templesArray) {
  // remove all cards so they are rebuilt
  document.querySelector('.res-grid').innerHTML = '';

  templesArray.forEach((temple) => {
    const card = document.createElement('section');
    const name = document.createElement('h3');
    const location = document.createElement('p');
    const dedication = document.createElement('p');
    const area = document.createElement('p');
    const img = document.createElement('img');

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `${temple.templeName} Temple`);
    img.setAttribute('loading', 'lazy');

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector('.res-grid').appendChild(card);
  });
}
