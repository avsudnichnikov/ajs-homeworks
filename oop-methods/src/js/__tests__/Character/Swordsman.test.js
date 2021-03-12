import Swordsman from '../../Character/Swordsman';

test('Valid', () => {
  const character = new Swordsman('Baromir');
  expect(character.name).toBe('Baromir');
  expect(character.type).toBe('Swordsman');
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});
