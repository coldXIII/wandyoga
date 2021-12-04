import './style.css';

const map = L.map('map').setView([0, 0], 1);

L.tileLayer(
  'https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=E5ptO5JQ7tFxWe6UphBZ',
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);
let marker = L.marker([51.5, -0.09]).addTo(map);

const menu = document.getElementById('bars');
const navbar = document.getElementById('menu');

menu.onclick = (e) => {
  e.preventDefault();
  navbar.classList.remove('hidden');
};

window.onscroll = (e) => {
  e.preventDefault();
  navbar.classList.add('hidden');
};
