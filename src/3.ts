interface ICharacter {
  name: string;
  level: number;

  introduce(phrase: string): void;
  levelUp(levels: number): void;
}

interface ISpellCaster {
  castSpell(): void;
}

class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error("Level too low");
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ", " + this.name);
  }

  castSpell(): void {
    console.log("Casting a spell, behold my power!");
  }

  levelUp(levels: number): void {
    this.level += levels;
    console.log(`Level up! New level is ${this.level}`);
  }
}

const wizard = new Wizard("Merlin", 15);

wizard.introduce("I am the mighty wizard");
wizard.castSpell();
wizard.levelUp(1);

export {};
