import { trigger, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
  trigger('routeAnimations', [
    transition('Visualizar => Cadastrar', [
      style({ opacity: 0 }),
      animate('.3s', style({ opacity: 1 }))
    ]),
    transition('Cadastrar => Visualizar', [
      style({ opacity: 0 }),
      animate('.3s', style({ opacity: 1 }))
    ]),
  ]);
