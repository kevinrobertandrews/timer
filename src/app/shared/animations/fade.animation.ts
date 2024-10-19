import { HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
  // ...
} from '@angular/animations';

export const fadeAnimation = () =>
  trigger('fade', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('100ms', style({ opacity: 1 })),
    ]),
    transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
  ]);
