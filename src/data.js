/* estas funciones son de ejemplo
export const example = () => 'example';

export const anotherExample = () => 'OMG'; */


// Función que filtre solo personajes con varitas

export const filterWands = (array) => {
  const arrayWands = [...array];
  return arrayWands.filter(obj => obj.wand.wood !== '' || obj.wand.core !== '' || obj.wand.length !== '');
};
