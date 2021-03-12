import Undead from '../../Character/Undead';

test('Valid', () => {
  const character = new Undead('Roger');
  expect(character.name).toBe('Roger');
  expect(character.type).toBe('Undead');
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});
