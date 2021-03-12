import ErrorRepository from '../ErrorRepository';

test('add', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.add(500, 'You broke the game');
  const received = errorRepository.translate(500);
  expect(received).toBe('You broke the game');
});

test('constructor', () => {
  const errorRepository = new ErrorRepository([
    { code: 404, description: 'User is not found' },
  ]);
  const received = errorRepository.translate(404);
  expect(received).toBe('User is not found');
});

test('Unknown error', () => {
  const errorRepository = new ErrorRepository();
  const received = errorRepository.translate(404);
  expect(received).toBe('Unknown error');
});
