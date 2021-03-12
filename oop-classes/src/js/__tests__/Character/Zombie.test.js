import Zombie from '../../Character/Zombie';

test('Valid', () => {
  const character = new Zombie('Laura Moon');
  expect(character.name).toBe('Laura Moon');
  expect(character.type).toBe('Zombie');
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});
