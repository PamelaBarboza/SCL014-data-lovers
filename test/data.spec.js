// importamos la función `example`
import {
  // eslint-disable-next-line max-len
  filterWands, filterSpells, filterPotterHouse, filterHogwartsStaff, filterHogwartsStudents, searchCharacters, orderByNameAndGender,
} from '../src/data.js';

describe('orderByNameAndGender', () => {
  it('debería ser una función', () => {
    expect(typeof orderByNameAndGender).toBe('function');
  });

  it('es una función que ordena a los personajes por nombre o por género', () => {
    const input1 = [
      { name: 'Ron Weasley' },
      { name: 'Draco Malfoy' },
      { name: 'Minerva McGonagall' },
    ];
    const outputAsc = [
      { name: 'Draco Malfoy' },
      { name: 'Minerva McGonagall' },
      { name: 'Ron Weasley' },
    ];
    const outputDesc = [
      { name: 'Ron Weasley' },
      { name: 'Minerva McGonagall' },
      { name: 'Draco Malfoy' },
    ];
    const input2 = [
      { gender: 'male' },
      { gender: 'female' },
    ];
    const outputFem = [
      { gender: 'female' },
    ];
    const outputMale = [
      { gender: 'male' },
    ];
    expect(orderByNameAndGender(input1, 'A-Z')).toEqual(outputAsc);
    expect(orderByNameAndGender(input1, 'Z-A')).toEqual(outputDesc);
    expect(orderByNameAndGender(input2, 'Femenino')).toEqual(outputFem);
    expect(orderByNameAndGender(input2, '')).toEqual(outputMale);
  });
});

describe('searchCharacters', () => {
  it('debería ser una función', () => {
    expect(typeof searchCharacters).toBe('function');
  });

  it('es una función que filtra personajes mediante un string ingresado', () => {
    const input1 = [
      { name: 'Luna Lovegood' },
      { name: 'Remus Lupin' },
      { name: 'Lucius Malfoy' },
      { name: 'Draco Malfoy' },
      { name: 'Ron Weasley' },
    ];
    const input2 = 'lu';
    const output = [
      { name: 'Luna Lovegood' },
      { name: 'Remus Lupin' },
      { name: 'Lucius Malfoy' },
    ];
    expect(searchCharacters(input1, input2)).toEqual(output);
  });
});

describe('filterHogwartsStudents', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterHogwartsStudents).toBe('function');
  });

  it('es una funcion que filtra estudiantes', () => {
    const input = [
      { hogwartsStudent: true },
      { hogwartsStudent: false },
    ];
    const output = [
      { hogwartsStudent: true },
    ];
    expect(filterHogwartsStudents(input)).toEqual(output);
  });
});

describe('filterHogwartsStaff', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterHogwartsStaff).toBe('function');
  });

  it('es una funcion que filtra staff', () => {
    const input = [
      { hogwartsStaff: false },
      { hogwartsStaff: true },
    ];
    const output = [
      { hogwartsStaff: true },
    ];
    expect(filterHogwartsStaff(input)).toEqual(output);
  });
});

describe('filterPotterHouse', () => {
  it('debería ser una función', () => {
    expect(typeof filterPotterHouse).toBe('function');
  });

  it('es una función que ordena a los personajes por la casa a la que pertenece', () => {
    const input = [
      { house: 'Gryffindor' },
      { house: 'Slytherin' },
      { house: 'Hufflepuff' },
      { house: 'Ravenclaw' },
    ];
    const outputGryf = [
      { house: 'Gryffindor' },
    ];
    const outputSlyt = [
      { house: 'Slytherin' },
    ];
    const outputHuff = [
      { house: 'Hufflepuff' },
    ];
    const outputRave = [
      { house: 'Ravenclaw' },
    ];
    expect(filterPotterHouse(input, 'Gryffindor')).toEqual(outputGryf);
    expect(filterPotterHouse(input, 'Slytherin')).toEqual(outputSlyt);
    expect(filterPotterHouse(input, 'Hufflepuff')).toEqual(outputHuff);
    expect(filterPotterHouse(input, 'Ravenclaw')).toEqual(outputRave);
  });
});

describe('filterWands', () => {
  it('debería ser una función', () => {
    expect(typeof filterWands).toBe('function');
  });

  it('es una función que filtra solo personajes con varita', () => {
    const input = [
      {
        wand: {
          wood: 'holly',
          core: 'phoenix feather',
          length: 11,
        },
      },
      {
        wand: {
          wood: '',
          core: '',
          length: '',
        },
      },
    ];

    const output = [
      {
        wand: {
          wood: 'holly',
          core: 'phoenix feather',
          length: 11,
        },
      },
    ];

    expect(filterWands(input)).toEqual(output);
  });
});

describe('filterSpells', () => {
  it('debería ser una función', () => {
    expect(typeof filterSpells).toBe('function');
  });

  it('es una función que filtra solo personajes con patronus', () => {
    const input = [
      { patronus: 'stag' },
      { patronus: 'otter' },
      { patronus: '' },
    ];

    const output = [
      { patronus: 'stag' },
      { patronus: 'otter' },
    ];

    expect(filterSpells(input)).toEqual(output);
  });
});
