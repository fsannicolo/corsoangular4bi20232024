import { Component } from '@angular/core';
import { IInsegnante } from 'src/app/common/insegnante.interface';
import { Studente } from 'src/app/common/studente.class';
import { IStudente } from 'src/app/common/studente.interface';

@Component({
  selector: 'app-studente-parent',
  templateUrl: './studente-parent.component.html',
  styleUrls: ['./studente-parent.component.css']
})
export class StudenteParentComponent {
 studenti: IStudente[] = [{nome: 'Andrea', cognome: 'Trentini', classe:'4Bi'}];

}
