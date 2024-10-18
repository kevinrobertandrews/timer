import { Injectable } from '@angular/core';
import { StorageKey, StorageService } from '../../core/storage';
import { TasksKeys } from './tasks.keys';
import { BehaviorSubject } from 'rxjs';
import { Task } from './Task.model';

@Injectable()
export class TaskService {
  private _state = new BehaviorSubject<Task[]>([]);

  constructor(private _storage: StorageService) {
    this._load();
  }

  // API --

  get state() {
    return this._state.asObservable();
  }

  add(value: string) {
    const task: Task = {
      title: value,
      date: new Date(),
    };

    this._state.value.push(task);
    this._storage.save(TasksKeys.Tasks, this._state.value);
  }

  clear() {
    this._state.next([]);
    this._save();
  }

  remove(item: Task) {
    console.log('removing task...', item);

    const current = this._state.value;

    const index = current.indexOf(item);
    if (index > -1) {
      // only splice array when item is found
      current.splice(index, 1); // 2nd parameter means remove one item only
    }

    this._state.next(current);
    this._save();
  }

  private _save() {
    this._storage.save(StorageKey.Tasks, this._state.value);
  }

  private _load() {
    const value = this._storage.load(StorageKey.Tasks);
    if (value) {
      return this._state.next(value);
    } else {
      return;
    }
  }
}
