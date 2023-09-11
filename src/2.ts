import { StringLiteral } from "../../../node_modules/typescript/lib/typescript";

class Employee {
  public name: string;
  private department: string;
  protected salary: number;

  constructor(name: string, department: string, salary: number) {}

  getEmployeeDetails(): string {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}
const manager = new Manager("John", "Management", 50000);
console.log(manager.getEmployeeDetails());

export {};
