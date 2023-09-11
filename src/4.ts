class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  getKey() {
    return Key;
  }
}

abstract class House {
  door: boolean = false;
  key: Key;
  tenants: Person[] = [];

  comeIn(person: Person) {
    if ((this.door = true)) {
      this.tenants.push(person);
      console.log("Welcome!");
    } else {
      console.log("Door is closed or key is valid");
    }
  }
  abstract OpenDoor(key: Key): void;
}

class MyHouse extends House {
  OpenDoor() {
    if (this.key === key) {
      this.door = true;
      this.key = key;
      return true;
    }
    return false;
  }
}

const key = new Key();

const house = new MyHouse();
const person = new Person(key);

house.OpenDoor();

house.comeIn(person);

export {};
