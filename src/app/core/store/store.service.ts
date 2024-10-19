import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../../features/tasks/task.model';
import { TaskFeatures } from '../../features/tasks/task.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService implements TaskFeatures {
  private _tasks: BehaviorSubject<Task[]> = new BehaviorSubject([
    { title: 'MY fake task', created: new Date() },
  ]);

  get tasks(): Observable<Task[]> {
    return this._tasks.asObservable();
  }

  addTask(task: Task): void {
    this._tasks.value.push(task);
  }

  clearTasks(): void {
    this._tasks.next([]);
  }

  removeTask(task: Task): void {
    const current = this._tasks.value;

    const index = current.indexOf(task);
    if (index > -1) {
      // only splice array when item is found
      current.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
}
