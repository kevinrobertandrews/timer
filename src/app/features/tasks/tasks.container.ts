import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'tasks-container',
  templateUrl: './tasks.container.html',
  styleUrl: './tasks.container.scss',
})
export class TasksContainer {
  constructor(private _tasks: TaskService) {}

  get state() {
    return this._tasks.state;
  }

  get isEmpty(): boolean {
    return this._tasks.isEmpty();
  }

  handleSubmit(value: any) {
    this._tasks.add(value);
  }

  clear() {
    this._tasks.clear();
  }

  remove(task: Task) {
    this._tasks.remove(task);
  }
}
