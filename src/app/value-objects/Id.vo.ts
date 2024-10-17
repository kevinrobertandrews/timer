import { ValueObject } from "./abstract/ValueObject.abstract";

export class Id extends ValueObject {
  constructor() {
    const id = Math.random().toString().split('.')[1];
    super(id);
  }
}