import { trigger, transition, style, animate } from '@angular/animations';

export const fateSlideAnimation = () =>
  trigger('fadeSlide', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(-20px)' }),
      animate(
        '300ms ease-out',
        style({ opacity: 1, transform: 'translateX(0)' })
      ),
    ]),
    transition(':leave', [
      style({ opacity: 1, transform: 'translateX(0)' }),
      animate(
        '300ms ease-out',
        style({ opacity: 0, transform: 'translateX(+20px)' })
      ),
    ]),
  ]);
