import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  now = new BehaviorSubject(new Date());

  constructor() {
    setInterval(() => {
      this.now.next(new Date());
    }, 1000);
  }
}
