import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomGeneratorService {

  generatoreObservable$ = new Observable<number>((generatore) => {
    let timer = setInterval(() => {
      let numero = Math.random();
      generatore.next(numero);
      if (numero < 0.1) {
        clearInterval(timer);
        generatore.complete();
      }
    }, 500);
  })

  constructor() { }
}
