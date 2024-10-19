import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  private _date = new Subject();

  public get now() {
    this._date.next(new Date());
    return this._date.asObservable();
  }
}
