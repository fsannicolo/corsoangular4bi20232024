import { Injectable } from '@angular/core';
import { IStudente } from '../common/studente.interface';

@Injectable({
  providedIn: 'root'
})
export class StudenteService {

  studenti: IStudente[] = [{nome: 'Andrea', cognome: 'Trentini', classe: '4Bi'}];

  aggiungiStudente(studente: IStudente): void {
    this.studenti.push(studente);
  }

  eliminaStudente(indice: number): void {
    this.studenti.splice(indice, 1);
  }

  modificaStudente(indice: number, studente: IStudente): void {
    this.studenti[indice] = studente;
  }

  constructor() { }
}
