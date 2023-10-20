import { Component, EventEmitter, Output } from '@angular/core';
import { Studente } from 'src/app/common/studente.class';
import { IStudente } from 'src/app/common/studente.interface';

@Component({
  selector: 'app-studente-out-child',
  templateUrl: './studente-out-child.component.html',
  styleUrls: ['./studente-out-child.component.css']
})
export class StudenteOutChildComponent {
  @Output() nuovoStudente = new EventEmitter<IStudente>();
  studente!: Studente;

  salvaStudente(nome: any, cognome: any, classe: any): void {
    this.nuovoStudente.emit({nome: nome.value, cognome: cognome.value, classe:classe.value});
    nome.value = '';
    cognome.value = '';
    classe.value = '';
  }
}
