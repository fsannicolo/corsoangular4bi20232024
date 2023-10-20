import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { IPersona } from './ipersona.interface';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent {
  persone!: IPersona[];

  constructor(private httpService: HttpService) {}

  getData(): void {
    this.httpService.loadData('/assets/data.json').subscribe(data => {
      this.persone = data;
    })
  }

}
