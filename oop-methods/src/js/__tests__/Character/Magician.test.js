import Magician from '../../Character/Magician';

test('Valid', () => {
  const character = new Magician('Gandalf');
  expect(character.name).toBe('Gandalf');
  expect(character.type).toBe('Magician');
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});
