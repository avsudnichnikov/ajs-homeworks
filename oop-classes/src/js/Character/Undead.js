import Character from './Character';

export default class Undead extends Character {
  constructor(name) {
    const attack = 25;
    const defence = 25;
    super(name, 'Undead', attack, defence);
  }
}
