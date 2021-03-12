export default class Character {
  static get allowedTypes() {
    return [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
  }

  constructor(name, type, attack = 0, defence = 0) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;

    if ((this.name.length > 10) || (this.name.length < 2)) {
      throw new Error('Invalid name');
    }
    if (!Character.allowedTypes.includes(this.type)) {
      throw new Error('Invalid type');
    }
  }
}
