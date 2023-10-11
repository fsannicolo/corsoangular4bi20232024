import { Component } from '@angular/core';
import { Studente } from 'src/app/common/studente.class';

@Component({
  selector: 'app-studente-parent',
  templateUrl: './studente-parent.component.html',
  styleUrls: ['./studente-parent.component.css']
})
export class StudenteParentComponent {
  studenti: Studente[] = [];  
}
