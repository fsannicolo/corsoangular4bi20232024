import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Studente } from 'src/app/common/studente.class';
import { IStudente } from 'src/app/common/studente.interface';

@Component({
  selector: 'app-studente-in-child',
  templateUrl: './studente-in-child.component.html',
  styleUrls: ['./studente-in-child.component.css']
})
export class StudenteInChildComponent {
  @Input() studenti!: IStudente[];
  @Output() onElimina = new EventEmitter<number>();

  elimina(i: number): void {
    this.onElimina.emit(i);
  }
}
