import { Component } from '@angular/core';
import { IStudente } from 'src/app/common/studente.interface';
import { StudenteService } from '../studente.service';

@Component({
  selector: 'app-studente-table',
  templateUrl: './studente-table.component.html',
  styleUrls: ['./studente-table.component.css']
})
export class StudenteTableComponent {

  studenti: IStudente[];

  constructor(private studenteService: StudenteService) {
    this.studenti = this.studenteService.studenti;
  }

  elimina(indice: number): void {
    this.studenteService.eliminaStudente(indice);
  }

}
