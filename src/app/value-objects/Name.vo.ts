import { ValueObject } from "./abstract/ValueObject.abstract";

export class Name extends ValueObject {
  constructor(name: string) {
    super(name)
  }
}