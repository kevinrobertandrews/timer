import { Id } from "../value-objects/Id.vo";
import { Name } from "../value-objects/Name.vo";

class Client {
  readonly id: Id;
  readonly name: Name;

  constructor(name: Name) {
    this.id = new Id();
    this.name = name;
  }
}

const kra = new Client(new Name('KevinRobertAndrews'));
const lsworks = new Client(new Name('LSWorks'));

console.log(kra)
console.log(lsworks)