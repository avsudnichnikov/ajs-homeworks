import Character from './Character';

export default class MathChar extends Character {
  constructor(name, type, attack, defence) {
    super(name, type, attack, defence);
    this.stoned = false;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    let attack = this._attack * ((11 - this.distance) / 10);
    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    return (attack > 0) ? Math.round(attack) : 0;
  }

  set attack(value) {
    this._attack = value;
  }
}
