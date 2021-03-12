import orderByProps from '../orderByProps';

test('Normal', () => {
  const character = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const order = ['name', 'level'];
  const expected = orderByProps(character, order);
  const received = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(expected).toEqual(received);
});

test('Unknown property', () => {
  const character = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const order = ['name', 'surname'];
  const expected = orderByProps(character, order);
  const received = [
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
  ];
  expect(expected).toEqual(received);
});

test('Check order', () => {
  const character = {
    name: 'мечник', level: 2, health: 10, attack: 80, defence: 40,
  };
  const order = ['defence', 'level', 'attack', 'health', 'name'];
  const expected = orderByProps(character, order);
  const received = [
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
  ];
  expect(expected).toEqual(received);
});

test('Check alphabet', () => {
  const character = {
    name: 'мечник', level: 2, health: 10, defence: 40, attack: 80,
  };
  const order = [];
  const expected = orderByProps(character, order);
  const received = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(expected).toEqual(received);
});
