export default function getHealthState({ name, health }) {
  if (typeof (health) !== 'number' || health < 0) {
    throw new Error('Wrong number');
  }
  if (health > 50) {
    return 'healthy';
  }
  if (health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
