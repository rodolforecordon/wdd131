// Footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
const lastModified = '10/07/2025 23:19:30';
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Select
const products = [
  {
    id: 'fc-1888',
    name: 'flux capacitor',
    averagerating: 4.5,
  },
  {
    id: 'fc-2050',
    name: 'power laces',
    averagerating: 4.7,
  },
  {
    id: 'fs-1987',
    name: 'time circuits',
    averagerating: 3.5,
  },
  {
    id: 'ac-2000',
    name: 'low voltage reactor',
    averagerating: 3.9,
  },
  {
    id: 'jj-1969',
    name: 'warp equalizer',
    averagerating: 5.0,
  },
];

const productSelect = document.getElementById('product-name');

products.forEach((product) => {
  const option = document.createElement('option');
  option.setAttribute('name', product.name);
  option.setAttribute('value', product.id);
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// handle form
const form = document.querySelector('form');

form.addEventListener('submit', function () {
  let numReviews = Number(localStorage.getItem('reviewCount')) || 0;
  localStorage.setItem('reviewCount', numReviews + 1);
});
