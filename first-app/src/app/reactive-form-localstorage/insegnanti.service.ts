import { Injectable } from '@angular/core';
import { IInsegnante } from '../common/insegnante.interface';
import { Subject } from 'rxjs';
import { NonNullableFormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InsegnantiService {

  private insegnanti: IInsegnante[] = [];
  
  private insegnantiSubject = new Subject<IInsegnante[]>();
  private editInsegnanteSubject = new Subject<number>();
  
  insegnantiObervable = this.insegnantiSubject.asObservable();
  editInsegnanteObervable = this.editInsegnanteSubject.asObservable();

  constructor() { }

  addInsegnante(insegnante: IInsegnante): void {
    this.insegnanti.push(insegnante);
    this.insegnantiSubject.next(this.insegnanti);
  }

  getInsegnante(index: number): IInsegnante {
    return this.insegnanti[index];
  }

  updateInsegnante(index: number, insegnante: IInsegnante): void {
    this.insegnanti[index] = insegnante;
    this.insegnantiSubject.next(this.insegnanti);
  }

  deleteInsegnante(index: number): void {
    this.insegnanti.splice(index, 1);
  }

  editInsegnante(index: number): void {
    this.editInsegnanteSubject.next(index);
  }

  saveInsegnanti(): void {
    localStorage.setItem('elenco-insegnanti', JSON.stringify(this.insegnanti));
  }

  loadInsegnanti(): void {
    let tmp = localStorage.getItem('elenco-insegnanti');
    if (tmp) {
      this.insegnanti = JSON.parse(tmp);
      this.insegnantiSubject.next(this.insegnanti);
    }
  }

}
