class Key {
  private signature: boolean;

  constructor() {
    this.signature = Math.random() >= 0.5;
  }

  getSignature(): boolean {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  getKey(): boolean {
    return this.key.getSignature();
  }
}

abstract class House {
  door: boolean = false;
  key: Key | null = null;
  tenants: Person[] = [];

  comeIn(person: Person) {
    if (this.door && this.key && person.getKey() === this.key.getSignature()) {
      this.tenants.push(person);
      console.log("Welcome!");
    } else {
      console.log("Door is closed or key is valid");
    }
  }
  abstract OpenDoor(key: Key): boolean;
}

class MyHouse extends House {
  OpenDoor(key: Key): boolean {
    if (key && key.getSignature() === true) {
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

house.OpenDoor(key);

house.comeIn(person);

export {};
