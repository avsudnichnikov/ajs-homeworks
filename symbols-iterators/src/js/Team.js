import Person from "./Person";

export default class Team {
  constructor() {
    this.persons = [];
  }

  get length() {
    return this.persons.length;
  }

  add(member) {
    this.persons.push(member);
  }

  [Symbol.iterator]() {
    const persons = this.persons;
    let key = 0;

    return {
      next() {
        const result = {
          done: key >= persons.length,
          value: new Person(persons[key]),
        };
        key += 1;
        return result;
      },
    };
  }
}
