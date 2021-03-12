import Character from './Character';

export default class Bowman extends Character {
  constructor(name) {
    const attack = 25;
    const defence = 25;
    super(name, 'Bowman', attack, defence);
  }
}
