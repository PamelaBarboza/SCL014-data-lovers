/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable no-console */
import { filterWands, filterSpells, filterPotterHouse } from './data.js';
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
  containerShow.style.display = 'none';
  wandsContainer.style.display = 'block';
  potterSpells.style.display = 'none';
  potterGryffindor.style.display = 'none';
  potterSlytherin.style.display = 'none';
  potterHufflepuff.style.display = 'none';

  const arrWands = filterWands(POTTER);
  document.getElementById('insertWands').innerHTML = showMainPotterCharacters(arrWands);
});

// Función que muestra los Hechizos
const spellsMenu = document.getElementById('spellsMenu');
spellsMenu.addEventListener('click', () => {
  containerShow.style.display = 'none';
  wandsContainer.style.display = 'none';
  potterSpells.style.display = 'block';
  potterGryffindor.style.display = 'none';
  potterSlytherin.style.display = 'none';
  potterHufflepuff.style.display = 'none';


  const arrSpells = filterSpells(POTTER);
  document.getElementById('insertPotterSpells').innerHTML = showMainPotterCharacters(arrSpells);
});

// Función que muestra la casa G
const valuePotterGryffindor = document.getElementById('subOption1').getAttribute('data-value');
const filterHGryffindor = document.getElementById('subOption1');
filterHGryffindor.addEventListener('click', () => {
  containerShow.style.display = 'none';
  wandsContainer.style.display = 'none';
  potterSpells.style.display = 'none';
  potterGryffindor.style.display = 'block';
  potterSlytherin.style.display = 'none';
  potterHufflepuff.style.display = 'none';

  const filterGryff = filterPotterHouse(POTTER, valuePotterGryffindor);
  document.getElementById('filterGryffindor').innerHTML = showMainPotterCharacters(filterGryff);
});


// Función que muestra la casa S
const valueSlytherin = document.getElementById('subOption2').getAttribute('data-value');
const filterHSlytherin = document.getElementById('subOption2');
filterHSlytherin.addEventListener('click', () => {
  containerShow.style.display = 'none';
  wandsContainer.style.display = 'none';
  potterSpells.style.display = 'none';
  potterGryffindor.style.display = 'none';
  potterSlytherin.style.display = 'block';
  potterHufflepuff.style.display = 'none';


  const filterSly = filterPotterHouse(POTTER, valueSlytherin);
  document.getElementById('filterSlytherin').innerHTML = showMainPotterCharacters(filterSly);
});

// Función que muestra la casa H
const valueHufflepuff = document.getElementById('subOption3').getAttribute('data-value');
const filterHHufflepuff = document.getElementById('subOption3');
filterHHufflepuff.addEventListener('click', () => {
  containerShow.style.display = 'none';
  wandsContainer.style.display = 'none';
  potterSpells.style.display = 'none';
  potterGryffindor.style.display = 'none';
  potterSlytherin.style.display = 'none';
  potterHufflepuff.style.display = 'block';


  const filterHuff = filterPotterHouse(POTTER, valueHufflepuff);
  document.getElementById('insertPotterHufflepuff').innerHTML = showMainPotterCharacters(filterHuff);
});

// Función que muestra la casa R
const valueRavenclaw = document.getElementById('subOption4').getAttribute('data-value');
const filterHRavenclaw = document.getElementById('subOption4');
filterHRavenclaw.addEventListener('click', () => {
  const filterRav = filterPotterHouse(POTTER, valueRavenclaw);
  document.getElementById('insertPotterRavenclaw').innerHTML = showMainPotterCharacters(filterRav);
  console.log(filterRav);
});

// Función que muestra Profesores
const subOption5 = document.getElementById('subOption5');
subOption5.addEventListener('click', () => {
});
// Función que muestra la casa Estudiantes
const subOption6 = document.getElementById('subOption6');
subOption6.addEventListener('click', () => {
});
