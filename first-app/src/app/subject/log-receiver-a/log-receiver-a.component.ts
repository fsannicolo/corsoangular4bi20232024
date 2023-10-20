import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-log-receiver-a',
  templateUrl: './log-receiver-a.component.html',
  styleUrls: ['./log-receiver-a.component.css']
})
export class LogReceiverAComponent implements OnInit {
  message!: string;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logService.logObservable.subscribe(message => {
      this.message = message;
      timer(3000).subscribe(() => {
        this.message  = '';
      })
    })
  }

}
