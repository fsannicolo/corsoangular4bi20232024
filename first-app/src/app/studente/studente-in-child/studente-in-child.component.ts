import { Component, Input } from '@angular/core';
import { IStudente } from 'src/app/common/studente.interface';

@Component({
  selector: 'app-studente-in-child',
  templateUrl: './studente-in-child.component.html',
  styleUrls: ['./studente-in-child.component.css']
})
export class StudenteInChildComponent {
  @Input() studentiRicevuti!: IStudente[]
  
}
