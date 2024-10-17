import {  Client, Task } from "./domain/types"
import { randomId } from "./helpers/randomId.function";

type Data = {
  clients: Client[];
  tasks: Task[];
}


// simulation
const kraId = randomId();
const lsworksId = randomId();
const task1Id = randomId();
const task2Id = randomId();
const task3Id = randomId();


export const data: Data = {
  clients: [
    Client.createTestClient(),
    Client.createTestClient(),
    Client.createTestClient(),

  ],
  tasks: [
    new Task(kraId),
    new Task(kraId),
    new Task(lsworksId),
  ]
}