import MathChar from './MathChar';

export default class Magician extends MathChar {
  constructor(name) {
    const attack = 10;
    const defence = 40;
    super(name, 'Magician', attack, defence);
  }
}
