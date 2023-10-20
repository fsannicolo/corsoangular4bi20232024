import { Component, OnInit } from '@angular/core';
import { RandomGeneratorService } from '../random-generator.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  constructor(private generatoreService: RandomGeneratorService) { }

  numeri: number[] = [];

  ngOnInit(): void {
    
  }

  subscribe(): void {
    this.generatoreService.generatoreObservable$.subscribe({
      next: (numero) => {
        this.numeri.push(numero);
      },
      error: () => console.log('errore'),
      complete: () => {
        console.log('finito')
      }
    });
  }

}
