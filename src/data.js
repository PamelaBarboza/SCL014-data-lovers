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


// Función que filtra staff
export const filterHogwartsStaff = (array) => {
  const arrayByStaff = [...array];
  const newArrayByStaff = arrayByStaff.filter(obj => (obj).hogwartsStaff === true);
  return newArrayByStaff;
};

// Función que filtra estudiantes
export const filterHogwartsStudents = (array) => {
  const arrayByStudent = [...array];
  const newArrayByStudent = arrayByStudent.filter(obj => (obj).hogwartsStudent === true);
  return newArrayByStudent;
};

// Función que busca personajes
export const searchCharacters = (array, string) => {
  const arrOfSearch = [...array];
  const newArrOfSearch = arrOfSearch.filter(obj => obj.name
    .indexOf(string[0].toUpperCase() + string.slice(1).toLowerCase()) > -1);
  return newArrOfSearch;
};

export const searchName = (data, name) => {
  const search = data.filter(obj => (obj.name.toLowerCase().indexOf(name.toLowerCase()) > -1));
  return search;
};
