import { Component } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log-emitter',
  templateUrl: './log-emitter.component.html',
  styleUrls: ['./log-emitter.component.css']
})
export class LogEmitterComponent {
  constructor(private logService: LogService) {}

  log(message: HTMLInputElement) {
    this.logService.log(message.value);
    message.value = '';
  }

}
