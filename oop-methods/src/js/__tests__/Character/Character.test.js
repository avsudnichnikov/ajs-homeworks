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

test('damage without defence', () => {
  const character = new Character('Merlin', 'Magician');
  character.defence = 0;
  character.damage(40);
  expect(character.health).toBe(60);
  character.damage(40);
  expect(character.health).toBe(20);
  character.damage(40);
  expect(character.health).toBe(0);
});

test('damage with defence', () => {
  const character = new Character('Merlin', 'Magician');
  character.defence = 23;
  character.damage(47);
  expect(character.health).toBe(64);
  character.damage(47);
  expect(character.health).toBe(28);
  character.damage(47);
  expect(character.health).toBe(0);
});

test('levelUp - change level', () => {
  const character = new Character('Merlin', 'Magician');
  character.levelUp();
  expect(character.level).toBe(2);
  character.levelUp();
  expect(character.level).toBe(3);
});

test('levelUp - change params', () => {
  const character = new Character('Merlin', 'Magician', 100, 10);
  character.levelUp();
  expect(character.attack).toBe(120);
  expect(character.defence).toBe(12);
  character.levelUp();
  expect(character.attack).toBe(144);
  expect(character.defence).toBe(14);
});

test('levelUp - restoring health', () => {
  const character = new Character('Merlin', 'Magician');
  character.health = 45;
  character.levelUp();
  expect(character.health).toBe(100);
});

test('levelUp of died character', () => {
  expect(() => {
    const character = new Character('Merlin', 'Magician');
    character.health = 0;
    character.levelUp();
  }).toThrow('The character is dead');
});
