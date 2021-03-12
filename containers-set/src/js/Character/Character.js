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

  damage(points) {
    const health = this.health - points * (1 - this.defence / 100);
    this.health = (health > 0) ? Math.round(health) : 0;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('The character is dead');
    }
    this.level += 1;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
    this.health = 100;
  }
}
