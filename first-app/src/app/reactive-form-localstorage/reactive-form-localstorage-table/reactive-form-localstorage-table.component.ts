import { Component, OnDestroy, OnInit } from '@angular/core';
import { IInsegnante } from 'src/app/common/insegnante.interface';
import { InsegnantiService } from '../insegnanti.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-form-localstorage-table',
  templateUrl: './reactive-form-localstorage-table.component.html',
  styleUrls: ['./reactive-form-localstorage-table.component.css']
})
export class ReactiveFormLocalstorageTableComponent implements OnInit, OnDestroy {

  insegnanti!: IInsegnante[];
  insegnantiSubscription!: Subscription;

  constructor(private insegnantiService: InsegnantiService) {}

  ngOnInit(): void {
    this.insegnantiSubscription = this.insegnantiService.insegnantiObervable.subscribe(insegnanti => {
      this.insegnanti = insegnanti;
    })
  }

  ngOnDestroy(): void {
    this.insegnantiSubscription.unsubscribe();
  }

  saveData(): void {
    this.insegnantiService.saveInsegnanti();
  }

  loadData(): void {
    this.insegnantiService.loadInsegnanti();
  }

  eliminaInsegnante(index: number):void {
    this.insegnantiService.deleteInsegnante(index);
  }

  modificaInsegnante(index: number) {
    this.insegnantiService.editInsegnante(index);
  } 
}
