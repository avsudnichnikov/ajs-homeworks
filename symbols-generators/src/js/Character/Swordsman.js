import Character from './Character';

export default class Swordsman extends Character {
  constructor(name) {
    const attack = 40;
    const defence = 10;
    super(name, 'Swordsman', attack, defence);
  }
}
