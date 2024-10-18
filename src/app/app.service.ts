import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Client = {
  name: string;
}

export type State = {
  clients: Client[];
}

const clientContainer = {

}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _state: BehaviorSubject<State> = new BehaviorSubject<State>({
    clients: [
      {
        name: 'KevinRobertAndrews',
      },
      {
        name: "LSWorks"
      },
    ]
  });


  get state() {
    return this._state.asObservable();
  }

  // PUBLIC API

  public addClient(client: Client) {
    this._state.value.clients.push(client);
  }
}
