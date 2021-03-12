import Magician from '../Magician';
import Daemon from '../Daemon';

test('MathChar', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 2;
  merlin.stoned = true;
  expect(merlin.attack).toBe(85);
});
