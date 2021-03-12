import getHealthState from '../getHealthState';

test('Full health', () => {
  const healthState = getHealthState({ name: 'Маг', health: 100 });
  expect(healthState).toBe('healthy');
});

test('Almost healthy', () => {
  const healthState = getHealthState({ name: 'Маг', health: 90 });
  expect(healthState).toBe('healthy');
});

test('Wounded - upper bound', () => {
  const healthState = getHealthState({ name: 'Маг', health: 50 });
  expect(healthState).toBe('wounded');
});

test('Wounded - lower bound', () => {
  const healthState = getHealthState({ name: 'Маг', health: 15 });
  expect(healthState).toBe('wounded');
});

test('Critical - upper bound', () => {
  const healthState = getHealthState({ name: 'Маг', health: 14 });
  expect(healthState).toBe('critical');
});

test('Critical - lower bound', () => {
  const healthState = getHealthState({ name: 'Маг', health: 1 });
  expect(healthState).toBe('critical');
});

test('Negative value', () => {
  expect(() => {
    getHealthState({ name: 'Маг', health: -1 });
  }).toThrow('Wrong number');
});

test('Text value', () => {
  expect(() => {
    getHealthState({ name: 'Маг', health: 'full' });
  }).toThrow('Wrong number');
});

test('Empty value', () => {
  expect(() => {
    getHealthState({});
  }).toThrow('Wrong number');
});
