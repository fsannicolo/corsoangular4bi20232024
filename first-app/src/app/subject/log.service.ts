import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private logSubject = new Subject<string>();
  logObservable = this.logSubject.asObservable();

  constructor() { }

  log(message: string): void {
    this.logSubject.next(message);
  }
}
