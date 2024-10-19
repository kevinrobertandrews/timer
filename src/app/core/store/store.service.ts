import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { FeatureNotImplementedError } from '../error';

// interface StoreFeature {
//   add<T>(stateKey: AppStateKeys, value: T): void;
// }

// ?? Verey extendable...
export enum AppStateKeys {
  Tasks = 'tasks',
}

type AppState = {
  tasks: any;
};

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _state = new BehaviorSubject({
    tasks: ['heres a fake task...', 'Another one to get ya going'],
  });

  public get state() {
    return this._state.asObservable();
  }
}
