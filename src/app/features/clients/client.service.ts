import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageKey, StorageService } from '../../core/storage';
import { Client } from './Client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private _state = new BehaviorSubject<Client[]>([]);

  constructor(private _storage: StorageService) {
    this._load();
  }

  // API --

  public get state() {
    return this._state.asObservable();
  }

  add(client: Client) {
    this._state.value.push(client);
    this._save();
  }

  clear() {
    this._state.next([]);
    this._save();
  }

  // Internal --

  private _save() {
    this._storage.save(StorageKey.Clients, this._state.value);
  }

  private _load() {
    const value = this._storage.load(StorageKey.Clients);

    if (value) {
      this._state.next(value);
    } else {
      return; // noop
    }
  }
}
