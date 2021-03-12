import Team from './Team.js';
import Swordsman from './Character/Swordsman.js';
import Bowman from './Character/Bowman.js';

const team = new Team();
team.add(new Swordsman('Aragorn'));
team.add(new Bowman('Legolas'));

for (let member of team) {
  console.log(member);
}

console.log('app worked');
