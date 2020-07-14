/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable no-console */
import {
  // eslint-disable-next-line max-len
  filterWands, filterSpells, filterPotterHouse, filterHogwartsStaff, filterHogwartsStudents, searchCharacters,
} from './data.js';
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
          <p>Varitas:</p>
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

// Función que crea cards mostrando descripción de varitas
const characterWands = (data) => {
  let templatePotter = '';
  data.map((obj) => {
    templatePotter += `
    <div class="card">
      <div class="card-inside">
            <div class="card-front">
              <img src="${obj.image}" alt="Image" class="pictureCharacter"/>
              <h2 class="fontNameCharacter">${obj.name}</h2>
            </div>
        <div class="card-back">
          <h1>${obj.name}</h1>
          <p  id="hola">VARITAS:</p>
          <li>Madera: ${obj.wand.wood}</li>
          <li>Núcleo: ${obj.wand.core}</li>
          <li>Largo: ${obj.wand.length}</li>
       </div>
      </div>
    </div>;`;

    return templatePotter;
  });
  return templatePotter;
};

// Función que muestra las varitas
const wandsMenu = document.getElementById('wandsMenu');
wandsMenu.addEventListener('click', () => {
  containerShow.style.display = 'none';
  wandsContainer.style.display = 'block';
  potterSpells.style.display = 'none';
  potterGryffindor.style.display = 'none';
  potterSlytherin.style.display = 'none';
  potterHufflepuff.style.display = 'none';
  potterRavenclaw.style.display = 'none';
  potterStaff.style.display = 'none';
  potterStudents.style.display = 'none';
  text.value = '';

  const arrWands = filterWands(POTTER);
  document.querySelector('#insertWands').innerHTML = characterWands(arrWands);
});

// Función que crea cards mostrando descripción de varitas
const showPotterSpells = (file) => {
  let templateSpellsPotter = '';
  file.map((obj) => {
    templateSpellsPotter += `
    <div class="card">
      <div class="card-inside">
            <div class="card-front">
              <img src="${obj.image}" alt="Image" class="pictureCharacter"/>
              <h2 class="fontNameCharacter">${obj.name}</h2>
            </div>
        <div class="card-back">
          <h1>${obj.name}</h1>
          <p>PATRONUS: ${obj.patronus}</p>
       </div>
      </div>
    </div>;`;

    return templateSpellsPotter;
  });
  return templateSpellsPotter;
};


// Función que muestra los Hechizos
const spellsMenu = document.getElementById('spellsMenu');
spellsMenu.addEventListener('click', () => {
  containerShow.style.display = 'none';
  wandsContainer.style.display = 'none';
  potterSpells.style.display = 'block';
  potterGryffindor.style.display = 'none';
  potterSlytherin.style.display = 'none';
  potterHufflepuff.style.display = 'none';
  potterRavenclaw.style.display = 'none';
  potterStaff.style.display = 'none';
  potterStudents.style.display = 'none';

  const arrSpells = filterSpells(POTTER);
  document.getElementById('insertPotterSpells').innerHTML = showPotterSpells(arrSpells);
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
  potterRavenclaw.style.display = 'none';
  potterStaff.style.display = 'none';
  potterStudents.style.display = 'none';


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
  potterRavenclaw.style.display = 'none';
  potterStaff.style.display = 'none';
  potterStudents.style.display = 'none';

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
  potterRavenclaw.style.display = 'none';
  potterStaff.style.display = 'none';
  potterStudents.style.display = 'none';


  const filterHuff = filterPotterHouse(POTTER, valueHufflepuff);
  document.getElementById('insertPotterHufflepuff').innerHTML = showMainPotterCharacters(filterHuff);
});

// Función que muestra la casa R
const valueRavenclaw = document.getElementById('subOption4').getAttribute('data-value');
const filterHRavenclaw = document.getElementById('subOption4');
filterHRavenclaw.addEventListener('click', () => {
  containerShow.style.display = 'none';
  wandsContainer.style.display = 'none';
  potterSpells.style.display = 'none';
  potterGryffindor.style.display = 'none';
  potterSlytherin.style.display = 'none';
  potterHufflepuff.style.display = 'none';
  potterRavenclaw.style.display = 'block';
  potterStaff.style.display = 'none';
  potterStudents.style.display = 'none';

  const filterRav = filterPotterHouse(POTTER, valueRavenclaw);
  document.getElementById('insertPotterRavenclaw').innerHTML = showMainPotterCharacters(filterRav);
});

// Función que muestra Profesores
const subOption5 = document.getElementById('subOption5');
subOption5.addEventListener('click', () => {
  containerShow.style.display = 'none';
  wandsContainer.style.display = 'none';
  potterSpells.style.display = 'none';
  potterGryffindor.style.display = 'none';
  potterSlytherin.style.display = 'none';
  potterHufflepuff.style.display = 'none';
  potterRavenclaw.style.display = 'none';
  potterStaff.style.display = 'block';
  potterStudents.style.display = 'none';

  const arrStaff = filterHogwartsStaff(POTTER);
  document.getElementById('filterStaff').innerHTML = showMainPotterCharacters(arrStaff);
});


// Función que muestra la casa Estudiantes
const subOption6 = document.getElementById('subOption6');
subOption6.addEventListener('click', () => {
  containerShow.style.display = 'none';
  wandsContainer.style.display = 'none';
  potterSpells.style.display = 'none';
  potterGryffindor.style.display = 'none';
  potterSlytherin.style.display = 'none';
  potterHufflepuff.style.display = 'none';
  potterRavenclaw.style.display = 'none';
  potterStaff.style.display = 'none';
  potterStudents.style.display = 'block';

  const arrStudents = filterHogwartsStudents(POTTER);
  document.getElementById('filterStudents').innerHTML = showMainPotterCharacters(arrStudents);
});

/* // Función que ordena alfabéticamente y por género
const filterSelection = document.querySelector('#filterSelection');

// Función que muestra personajes por orden a-z, z-a y género
filterSelection.addEventListener('change', () => {
  const arrByNameOrGender = orderByNameAndGender(POTTER, filterSelection.value);
  insertPotterCharacter.innerHTML = showMainPotterCharacters(arrByNameOrGender);
}); */


// Función que muestra los resultados de búsqueda en tiempo real
const text = document.querySelector('#search');
text.addEventListener('keyup', () => {
  searchContainer.style.display = 'block';
  containerShow.style.display = 'none';
  wandsContainer.style.display = 'none';
  potterSpells.style.display = 'none';
  potterGryffindor.style.display = 'none';
  potterSlytherin.style.display = 'none';
  potterHufflepuff.style.display = 'none';
  potterRavenclaw.style.display = 'none';
  potterStaff.style.display = 'none';
  potterStudents.style.display = 'none';


  const arrSearchCharacter = searchCharacters(POTTER, text.value);
  if (arrSearchCharacter.length > 0) {
    searchResults.innerHTML = showMainPotterCharacters(arrSearchCharacter);
  } else {
    searchResults.innerHTML = 'No se encontraron resultados';
  }
});

/* // Filtro 'Gender'
function selectGender() {
  document.querySelector('#house').value = '';
  document.querySelector('#role').value = '';
  const genderFilter = gender.value;
  const genderElement = filterGender(genderFilter);
  container.innerHTML = '';
  showData(genderElement);
}

house.addEventListener('change', selectHouse);
role.addEventListener('change', selectRole);
gender.addEventListener('change', selectGender); */
