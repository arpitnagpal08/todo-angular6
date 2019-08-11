import { trigger, style, transition, animate, keyframes } from '@angular/animations';

export let fade = trigger('fade', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('1s ease-in-out', keyframes([
      style({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
      style({ opacity: .5, transform: 'translateY(-50%)', offset: 0.5 }),
      style({ opacity: 1, transform: 'translateY(0%)', offset: 1 })
    ]))
  ]),
  transition(':leave', [
    style({ transform: 'translateX(0%)' }),
    animate('250ms ease-in', style({ transform: 'translateX(-100%)' }))
  ])
]);

export let slideAnimate = trigger('slideInOut', [
  transition(':leave', [
    style({ transform: 'translateX(0%)' }),
    animate('250ms ease-in', style({ transform: 'translateX(-100%)' }))
  ])
])