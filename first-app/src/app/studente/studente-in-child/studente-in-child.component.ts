import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Studente } from 'src/app/common/studente.class';

@Component({
  selector: 'app-studente-in-child',
  templateUrl: './studente-in-child.component.html',
  styleUrls: ['./studente-in-child.component.css']
})
export class StudenteInChildComponent {
  @Input() studenti!: Studente[];
  @Output() onElimina = new EventEmitter<number>();

  elimina(i: number): void {
    this.onElimina.emit(i);
  }
}
