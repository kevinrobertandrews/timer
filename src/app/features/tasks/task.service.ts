import { Injectable } from '@angular/core';
import { StoreService } from '../../core/store/store.service';
import { Task } from './task.model';

export interface TaskFeatures {
  addTask(task: Task): void;
  clearTasks(): void;
  removeTask(task: Task): void;
}

@Injectable()
export class TaskService implements TaskFeatures {
  constructor(private _store: StoreService) {}

  public addTask(task: Task) {
    this._store.addTask(task);
  }

  public clearTasks() {
    this._store.clearTasks();
  }

  public removeTask(task: Task) {
    this._store.removeTask(task);
  }
}
