import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.css']
})
export class TestServiceComponent implements OnInit {

  messaggi!: string[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.messaggi = this.dataService.messaggi;
  }

}
