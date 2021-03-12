import MathChar from './MathChar';

export default class Daemon extends MathChar {
  constructor(name) {
    const attack = 10;
    const defence = 40;
    super(name, 'Daemon', attack, defence);
  }
}
