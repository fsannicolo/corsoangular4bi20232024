import { Component } from '@angular/core';

@Component({
  selector: 'app-messaggi',
  templateUrl: './messaggi.component.html',
  styleUrls: ['./messaggi.component.css']
})
export class MessaggiComponent {
    messaggi: string[] = [];
    nuovoMessaggio: string = '';

    aggiungiMessaggio(): void {
      this.messaggi.push(this.nuovoMessaggio);
      this.nuovoMessaggio = '';
    }
    
    eliminaMessaggio(i: number): void {
      this.messaggi.splice(i,1);
    }
}
