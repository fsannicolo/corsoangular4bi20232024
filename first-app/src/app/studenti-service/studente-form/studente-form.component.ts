import { Component } from '@angular/core';
import { StudenteService } from '../studente.service';

@Component({
  selector: 'app-studente-form',
  templateUrl: './studente-form.component.html',
  styleUrls: ['./studente-form.component.css']
})
export class StudenteFormComponent {

  constructor(private studenteService: StudenteService) { }

  salvaStudente(nome: any, cognome: any, classe: any): void {
    this.studenteService.aggiungiStudente({nome: nome.value, cognome: cognome.value, classe:classe.value});
    nome.value = '';
    cognome.value = '';
    classe.value = '';
  }
}
