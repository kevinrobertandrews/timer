import { trigger, style, animate, transition } from '@angular/animations';

export const fromLeftAnimation = () =>
  trigger('fromLeft', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('500ms ease-out', style({ transform: 'translateX(0)' })),
    ]),
  ]);
