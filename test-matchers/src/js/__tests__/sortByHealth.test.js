import sortByHealth from '../sortByHealth';

test('Sorted array', () => {
  const healthState = sortByHealth(
    [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ],
  );
  expect(healthState).toEqual(
    [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ],
  );
});

test('Unsorted array', () => {
  const healthState = sortByHealth(
    [
      { name: 'мечник', health: 10 },
      { name: 'лучник', health: 80 },
      { name: 'маг', health: 100 },
    ],
  );
  expect(healthState).toEqual(
    [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ],
  );
});

test('notToBe', () => {
  const healthState = sortByHealth(
    [
      { name: 'мечник', health: 10 },
    ],
  );
  expect(healthState).not.toBe(
    [
      { name: 'мечник', health: 10 },
    ],
  );
});
