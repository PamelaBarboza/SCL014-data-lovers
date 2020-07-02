/* eslint-disable no-console */
/* import { example } from './data.js'; */
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
          <p>Nacimiento: ${obj.dateOfBirth}</p>
          <p>Especie: ${obj.species}</p>
          <p>Estatus de sangre: ${obj.ancestry}</p>
          <p>Casa: ${obj.house}</p>
          <p>Patronus: ${obj.patronus}</p>
          <p>Varita:</p>
          <li>Madera: ${obj.wand.wood}</li>
          <li>Núcleo: ${obj.wand.core}</li>
          <li>Largo: ${obj.wand.length}</li>
          <p>Actor: ${obj.actor}</p>
        </div>
      </div>
    </div>`;
  });
  return templatePotter;
};
const show = document.getElementById('show');

show.innerHTML = showMainPotterCharacters(POTTER);
