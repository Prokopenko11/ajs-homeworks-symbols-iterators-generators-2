export default class Team {
  constructor() {
    this.members = [];
  }

  add(character) {
    this.members.push(character);
  }

  *[Symbol.iterator]() {
    let currentMember = 0;
    const members = this.members;
    while (currentMember < members.length) {
      yield members[currentMember];
      currentMember += 1;
    }
  }
}
