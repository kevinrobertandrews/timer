import { Injectable } from '@angular/core';
import { StoreService } from '../../core/store/store.service';
import { Subscription } from 'rxjs';

@Injectable()
export class TaskService {
  sub: Subscription;
  data: any;

  constructor(private _store: StoreService) {
    this.sub = this._store.state.subscribe((data) => (this.data = [data]));
  }

  get tasks() {
    console.log('getting tasks from task service');
    console.log({ wut: this.data });
    return ['task 1', 'task 2'];

    return this.data;
  }
}
