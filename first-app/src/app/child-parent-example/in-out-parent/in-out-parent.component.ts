import { Component } from '@angular/core';

@Component({
  selector: 'app-in-out-parent',
  templateUrl: './in-out-parent.component.html',
  styleUrls: ['./in-out-parent.component.css']
})
export class InOutParentComponent {
  messaggi: string[] = ['Primo messaggio','Secondo messaggio','Terzo messaggio'];

  aggiungiMessaggio(nuovoMessaggio: string): void {
    this.messaggi.push(nuovoMessaggio)
  }

  eliminaMessaggio(i: number): void {
    this.messaggi.splice(i, 1);
  }
}
