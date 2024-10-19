import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { fadeAnimation } from '../../shared/animations/fade.animation';
import { fromLeftAnimation } from '../../shared/animations/fromLeft.animation';

@Component({
  selector: 'tasks-container',
  templateUrl: './tasks.container.html',
  styleUrl: './tasks.container.scss',
  animations: [fadeAnimation(), fromLeftAnimation()],
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
