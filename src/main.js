/* eslint-disable no-console */
import { filterWands, filterSpells } from './data.js';
import POTTER from './data/potter/potter.js';

console.log(POTTER);

// Función que muestra los personajes en Html

const showMainPotterCharacters = (data) => {
  let templatePotter = '';
  data.forEach((obj) => {
    templatePotter += `
    <div class="card">
      <div class="card-inside">
        <div class="card-front">
          <img src = '${obj.image}' alt = "Image" class="pictureCharacter"/>
          <h2 class="fontNameCharacter">${obj.name}</h2>
        </div>
        <div class="card-back">
          <h1>${obj.name}</h1>
          <p>Casa: ${obj.house}</p>
          <p>Patronus: ${obj.patronus}</p>
          <p>Varita:</p>
          <li>Madera: ${obj.wand.wood}</li>
          <li>Núcleo: ${obj.wand.core}</li>
          <li>Largo: ${obj.wand.length}</li>
          <p>Especie: ${obj.species}</p>
          <p>Estatus de sangre: ${obj.ancestry}</p>
          <p>Actor: ${obj.actor}</p>
        </div>
      </div>
    </div>`;
  });
  return templatePotter;
};
const show = document.getElementById('show');

show.innerHTML = showMainPotterCharacters(POTTER);

// Función que muestra las varitas
const wandsMenu = document.getElementById('wandsMenu');
wandsMenu.addEventListener('click', () => {
  const arrWands = filterWands(POTTER);
  document.getElementById('insertWands').innerHTML = showMainPotterCharacters(arrWands);
  console.log(arrWands);
});

// Función que muestra los Hechizos
const spellsMenu = document.getElementById('spellsMenu');
spellsMenu.addEventListener('click', () => {
  const arrSpells = filterSpells(POTTER);
  document.getElementById('insertPotterSpells').innerHTML = showMainPotterCharacters(arrSpells);
  console.log(arrSpells);
});

// Función que muestra la casa G
const subOption1 = document.getElementById('subOption1');
subOption1.addEventListener('click', () => {
});
// Función que muestra la casa S
const subOption2 = document.getElementById('subOption2');
subOption2.addEventListener('click', () => {
});

// Función que muestra la casa H
const subOption3 = document.getElementById('subOption3');
subOption3.addEventListener('click', () => {
});
// Función que muestra la casa R
const subOption4 = document.getElementById('subOption4');
subOption4.addEventListener('click', () => {
});
// Función que muestra Profesores
const subOption5 = document.getElementById('subOption5');
subOption5.addEventListener('click', () => {
});
// Función que muestra la casa Estudiantes
const subOption6 = document.getElementById('subOption6');
subOption6.addEventListener('click', () => {
});
