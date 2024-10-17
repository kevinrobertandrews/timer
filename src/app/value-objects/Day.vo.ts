import { ValueObject } from "./abstract/ValueObject.abstract";
import { Weekday } from "../constants/Weekday.const";

export class Day extends ValueObject {
  constructor(weekday: Weekday) {
    super(weekday);
  }
}


const day = new Day(Weekday.Monday);

console.log(day)