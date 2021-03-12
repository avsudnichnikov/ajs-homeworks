import Team from '../Team';
import Magician from '../Character/Magician';

test('add', () => {
  const gandalf = new Magician('Gandalf');
  const team = new Team();
  team.add(gandalf);
  const received = team.toArray();
  const expected = [
    {
      name: 'Gandalf',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];
  expect(received).toEqual(expected);
});

test('addAll', () => {
  const gandalf = new Magician('Gandalf');
  const saruman = new Magician('Saruman');
  const team = new Team();
  team.addAll(gandalf, saruman);
  const received = team.toArray();
  const expected = [
    {
      name: 'Gandalf',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Saruman',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];
  expect(received).toEqual(expected);
});

test('addAll - similar chars', () => {
  const gandalf1 = new Magician('Gandalf');
  const gandalf2 = new Magician('Gandalf');
  const team = new Team();
  team.addAll(gandalf1, gandalf2);
  const received = team.toArray();
  const expected = [
    {
      name: 'Gandalf',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Gandalf',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];
  expect(received).toEqual(expected);
});

test('add throw', () => {
  const gandalf = new Magician('Gandalf');
  const team = new Team();
  team.add(gandalf);

  expect(() => {
    team.add(gandalf);
  }).toThrow();

  const received = team.toArray();
  const expected = [
    {
      name: 'Gandalf',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];

  expect(received).toEqual(expected);
});

test('addAll twice', () => {
  const gandalf = new Magician('Gandalf');
  const team = new Team();
  team.addAll(gandalf);
  team.addAll(gandalf);
  const received = team.toArray();
  const expected = [
    {
      name: 'Gandalf',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];
  expect(received).toEqual(expected);
});
