
// primitive types --

import { randomId, randomName } from "../helpers/randomId.function";

export type Name = string;
export type Day = Weekday;
export type Id = string;
export type Title = string;
export type Description = string;
export type Money = number;

// compound types --

export type TaskStatus = 'running' | 'paused';

export enum Weekday  {
  Empty = "",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday"
};


// domain types --

export type PayPeriod = {
  start: Date,
  end: Date
}


export type Client = {
  id: Id,
  name: Name,
  tasks: Id[]
}

export const Client = {
  /**
   * Construct a test client.
   */
  createTestClient: (): Client => {
    return {
      id: `test${randomId()}`,
      name: `test${randomName()}`,
      tasks: []
    }
  }
}



export class Task {
  // members
  readonly id: Id;
  readonly title: Title;
  readonly description: Description;
  readonly income: Money;
  
  // associations
  readonly client: Id; // a Task has one Client

  // lifecylce
  constructor(clientId: Id) {
    this.id = "",
    this.title = "",
    this.description = "",
    this.income = 0;
    this.client = clientId;
  }
}