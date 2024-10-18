import { Injectable, isDevMode } from '@angular/core';
import { StorageKey } from '.';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  test() {
    console.log('testing storage service...');
  }

  save(label: string, value: any) {
    if (isDevMode()) console.info('Saving...', label, value);
    window.localStorage.setItem(label, JSON.stringify(value));
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
}
