import Character from '../../Character/Character';

test('Valid', () => {
  const character = new Character('Merlin', 'Magician');
  expect(character.name).toBe('Merlin');
  expect(character.type).toBe('Magician');
});

test('Base health', () => {
  const character = new Character('Merlin', 'Magician');
  expect(character.health).toBe(100);
});

test('Base level', () => {
  const character = new Character('Merlin', 'Magician');
  expect(character.level).toBe(1);
});

test('Fixed type', () => {
  const character = new Character('Merlin', 'Magician');
  expect(character.name).toEqual('Merlin');
  expect(character.type).toEqual('Magician');
});

test('Invalid name - big', () => {
  expect(() => new Character('Rumpelstiltskin', 'Magician')).toThrow('Invalid name');
});

test('Invalid name - small', () => {
  expect(() => new Character('', 'Magician')).toThrow('Invalid name');
});

test('Invalid type', () => {
  expect(() => new Character('Branch', 'Troll')).toThrow('Invalid type');
});
