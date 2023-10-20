import { Component } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log-receiver-b',
  templateUrl: './log-receiver-b.component.html',
  styleUrls: ['./log-receiver-b.component.css']
})
export class LogReceiverBComponent {
  message!: string;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logService.logObservable.subscribe(message => {
      this.message = message;
    })
  }
}
