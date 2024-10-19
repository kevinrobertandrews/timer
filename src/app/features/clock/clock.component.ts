import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { debounce, debounceTime, fromEvent, of } from 'rxjs';

export interface Clickable {
  click(event: Event): any;
}

export enum Role {
  Guest,
  User,
  Pro,
}

@Component({
  selector: 'kra-clock',
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
})
export class ClockComponent implements Clickable {
  time: Date = new Date();
  interval: any;
  clipboard: any;

  @HostListener('click', ['$event'])
  click() {
    const roles = [Role.Guest, Role.User, Role.Pro];

    const role = roles[Math.floor(Math.random() * roles.length)];

    switch (role) {
      case Role.Guest:
        console.log('handle guest...');
        navigator.clipboard.writeText(this.time.toISOString());
        break;
      case Role.User:
        console.log('handle user...');
        navigator.clipboard.writeText(this.time.toJSON());
        break;
      case Role.Pro:
        console.log('handle pro...');
        navigator.clipboard.writeText(this.time.toLocaleTimeString());
        break;
    }

    // requires permissions

    const clicks = [
      // copyToClipboard(Role.Guest, this.time.toISOString()),
      // copyToClipboard(Role.User, this.time.toJSON()),
      // copyToClipboard(Role.Pro, this.time.toLocaleTimeString()),
    ];

    // clicks[Math.floor(Math.random() * clicks.length)];
  }
}
