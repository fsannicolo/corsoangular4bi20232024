import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  messaggi: string[] = [];

  aggiungiMessaggio(messaggio: string): void {
    this.messaggi.push(messaggio);
  }

  constructor() { }
}
