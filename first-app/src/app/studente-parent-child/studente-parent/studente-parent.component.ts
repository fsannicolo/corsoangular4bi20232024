import { Component } from '@angular/core';
import { IStudente } from 'src/app/common/studente.interface';

@Component({
  selector: 'app-studente-parent',
  templateUrl: './studente-parent.component.html',
  styleUrls: ['./studente-parent.component.css']
})
export class StudenteParentComponent {
  studenti: IStudente[] = [];  

  aggiungiStudente(studente: IStudente): void {
    this.studenti.push(studente);
    console.log(this.studenti);
  }

  elimina(i:number): void {
    this.studenti.splice(i, 1);
  }
}
