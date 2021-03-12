import Character from './Character';

export default class Magician extends Character {
  constructor(name) {
    const attack = 10;
    const defence = 40;
    super(name, 'Magician', attack, defence);
  }
}
