import Bowman from '../../Character/Bowman';

test('Valid', () => {
  const character = new Bowman('Legolas');
  expect(character.name).toBe('Legolas');
  expect(character.type).toBe('Bowman');
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});
