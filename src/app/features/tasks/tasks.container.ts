import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './Task.model';
import { map, takeLast, tap } from 'rxjs';

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
