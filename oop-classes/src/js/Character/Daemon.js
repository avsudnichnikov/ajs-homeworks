import Character from './Character';

export default class Daemon extends Character {
  constructor(name) {
    const attack = 10;
    const defence = 40;
    super(name, 'Daemon', attack, defence);
  }
}
