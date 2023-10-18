import { Component, EventEmitter, Output } from '@angular/core';
import { Studente } from 'src/app/common/studente.class';

@Component({
  selector: 'app-studente-out-child',
  templateUrl: './studente-out-child.component.html',
  styleUrls: ['./studente-out-child.component.css']
})
export class StudenteOutChildComponent {
  @Output() nuovoStudente = new EventEmitter<Studente>();
  studente!: Studente;

  salvaStudente(nome: any, cognome: any, classe: any): void {
    this.nuovoStudente.emit(new Studente(nome.value, cognome.value, classe.value));
    nome.value = '';
    cognome.value = '';
    classe.value = '';
  }
}
