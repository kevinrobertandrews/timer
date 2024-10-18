import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'kra-clock',
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
})
export class ClockComponent implements OnInit, OnDestroy {
  time: Date = new Date();
  interval: any;

  ngOnInit() {
    this.interval = window.setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    window.clearInterval(this.interval);
    this.interval = null;
  }
}
