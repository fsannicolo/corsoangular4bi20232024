import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.css']
})
export class InComponent {

  constructor(private dataService: DataService) {}

  aggiungiMessaggio(): void {
    this.dataService.aggiungiMessaggio('nuovo messaggio');
  }

}
