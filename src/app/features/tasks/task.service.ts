import { Injectable } from '@angular/core';
import { StorageKey, StorageService } from '../../core/storage';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task.model';

interface StateValue<T> {
  // a key to use as a reference for the data to be saved
  key: string;
  // store the value here and note that this class is generic
  value: T;
}

// ?? Not sure how this will play out
class State {
  private _value: BehaviorSubject<unknown>;

  constructor(intialValue: unknown) {
    this._value = new BehaviorSubject(intialValue);
  }

  get value() {
    return this._value.asObservable();
  }

  public update(value: unknown) {
    // 1. get the value's type and use that as a key for storage
    // 2. update the state in memory
    // 3. save to storage
  }
}

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

  /**
   * Add a task to the list of tasks.
   */
  add(value: string) {
    const task: Task = {
      title: value,
      date: new Date(),
    };

    this._state.value.push(task);
    this._storage.save(StorageKey.Tasks, this._state.value);
  }

  /**
   * Clear the list of tasks.
   */
  clear() {
    this._state.next([]);
    this._save();
  }

  /**
   * Remove a specific task.
   */
  remove(item: Task) {
    console.log('removing task...', item);

    const current = this._state.value;

    const index = current.indexOf(item);
    // only splice array when item is found
    if (index > -1) {
      current.splice(index, 1);
    }

    // These two actions go together, is there a design that will marry these in a good way?
    this._state.next(current);
    this._save();
  }

  /**
   * Determine if list is empty or not
   */
  public isEmpty(): boolean {
    return !(this._state.value.length > 0);
  }

  // Private --

  /**
   * Save. Should this go somewhere else?
   */
  private _save() {
    this._storage.save(StorageKey.Tasks, this._state.value);
  }

  /**
   * Load. Would this be better somewhere else?
   */
  private _load() {
    const value = this._storage.load(StorageKey.Tasks);
    if (value) {
      return this._state.next(value);
    } else {
      return;
    }
  }
}
