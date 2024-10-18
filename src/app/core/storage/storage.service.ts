import { Injectable, isDevMode } from '@angular/core';
import { StorageKey } from '.';

interface Store {
  save(value: any): any;
  load(): any;
}

class LocalStorage implements Store {
  save(value: any) {
    window.localStorage.setItem('data', value);
  }

  load() {
    window.localStorage.getItem('data');
  }
}

class DBStorage implements Store {
  save() {}
  load() {}
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  store: Store = new LocalStorage();

  constructor() {}

  test() {
    console.log('testing storage service...');
  }

  save(label: string, value: any) {
    if (isDevMode()) console.info('Saving...', label, value);
    window.localStorage.setItem(label, JSON.stringify(value));

    // this.store.save(value)
  }

  load(storageKey: StorageKey) {
    console.log('loading...');
    const value = window.localStorage.getItem(storageKey) as string;

    if (value != null) {
      return JSON.parse(value);
    } else {
      return; // noop
    }
  }

  public lerd() {
    const value = window.localStorage.getItem('data');

    if (value) {
      // do something...
    } else {
      // do nothing...
    }
  }
}
