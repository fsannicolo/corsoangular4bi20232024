import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-out-child',
  templateUrl: './out-child.component.html',
  styleUrls: ['./out-child.component.css']
})
export class OutChildComponent {
  @Output() messaggioDisponibile = new EventEmitter<string>();
  
  nuovoMessaggio: string = '';

  salvaMessaggio():void {
    this.messaggioDisponibile.emit(this.nuovoMessaggio);
  }
}
