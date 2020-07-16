/* estas funciones son de ejemplo
export const example = () => 'example';

export const anotherExample = () => 'OMG'; */
// Función que filtra personajes por orden a-z, z-a y filtra por género
export const orderByNameAndGender = (array, string1) => {
  const arrayData = [...array];
  const newArray = arrayData.map(obj => obj.name)
    .sort().map(string2 => arrayData.find(obj => obj.name === string2));
  if (string1 === 'A-Z') {
    return newArray;
  } if (string1 === 'Z-A') {
    return newArray.reverse();
  } if (string1 === 'Femenino') {
    return arrayData.filter(obj => (obj).gender === 'female');
  }
  return arrayData.filter(obj => (obj).gender === 'male');
};

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

// Función que filtra personajes por casa
export const filterPotterHouse = (array, string) => {
  const arrayHouses = array.filter(obj => obj.house === string);
  return arrayHouses;
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
