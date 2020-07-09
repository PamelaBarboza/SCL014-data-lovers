/* estas funciones son de ejemplo
export const example = () => 'example';

export const anotherExample = () => 'OMG'; */


// Función que filtre solo personajes con varitas

export const filterWands = (array) => {
  const arrayWands = [...array];
  return arrayWands.filter(obj => obj.wand.wood !== '' || obj.wand.core !== '' || obj.wand.length !== '');
};
// Función que filtre solo los Hechizos
export const filterSpells = (array) => {
  const arraySpells = [...array];
  return arraySpells.filter(obj => obj.patronus !== '');
};

// Función que filtra personajes por casay
export const filterPotterHouse = (array, string) => {
  const arrayHouses = [...array];
  if (string === 'Gryffindor') {
    return arrayHouses.filter(obj => obj.house === 'Gryffindor');
  } if (string === 'Slytherin') {
    return arrayHouses.filter(obj => obj.house === 'Slytherin');
  } if (string === 'Hufflepuff') {
    return arrayHouses.filter(obj => obj.house === 'Hufflepuff');
  }
  return arrayHouses.filter(obj => obj.house === 'Ravenclaw');
};
