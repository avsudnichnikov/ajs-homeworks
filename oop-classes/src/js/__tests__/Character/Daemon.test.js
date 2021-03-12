import Daemon from '../../Character/Daemon';

test('Valid', () => {
  const character = new Daemon('Azazel');
  expect(character.name).toBe('Azazel');
  expect(character.type).toBe('Daemon');
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});
