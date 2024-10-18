import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../storage';

interface Task {
  title: string;
}

interface Client {
  name: string;
}

interface State {
  tasks: Task[];
  clients: Client[];
}

// NOT PROVIDED IN ROOT
@Injectable()
export class StateService {
  private _state = new BehaviorSubject<State>({
    tasks: [],
    clients: [],
  });

  public get state() {
    return this._state.asObservable();
  }

  constructor(private _store: StorageService) {
    this._load();
  }

  private _load() {
    // load data from a generic store...
  }
}
