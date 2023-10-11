import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-in-child',
  templateUrl: './in-child.component.html',
  styleUrls: ['./in-child.component.css']
})
export class InChildComponent {
  @Input() messaggiRicevuti!: string[];
  @Output() richiediElimina = new EventEmitter<number>();

  eliminaMessaggio(i: number) {
    this.richiediElimina.emit(i);
  }
}
