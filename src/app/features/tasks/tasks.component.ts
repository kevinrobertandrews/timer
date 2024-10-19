import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { fateSlideAnimation } from '../../shared/animations/fadeSlide.animation';
import { FeatureNotImplementedError } from '../../core/error';

@Component({
  selector: 'tasks-component',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  animations: [fateSlideAnimation()],
})
export class TasksComponent {
  isErmpty: boolean = true;

  constructor(private _service: TaskService) {}

  get tasks() {
    return this._service.tasks;
  }

  handleSubmit(value: any) {
    throw new FeatureNotImplementedError('tasks component handle submit');
  }

  clear() {
    throw new FeatureNotImplementedError('tasks list clear');
  }

  remove(task: Task) {
    throw new FeatureNotImplementedError('remove a task');
  }
}
