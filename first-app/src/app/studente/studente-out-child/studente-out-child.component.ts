import { Component } from '@angular/core';
import { Studente } from 'src/app/common/studente.class';

@Component({
  selector: 'app-studente-out-child',
  templateUrl: './studente-out-child.component.html',
  styleUrls: ['./studente-out-child.component.css']
})
export class StudenteOutChildComponent {
  studente!: Studente;

  salvaStudente(nome: any, cognome: any, classe: any): void {
    console.log(nome.value);
  }
}
