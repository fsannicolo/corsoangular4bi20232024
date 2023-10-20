import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPersona } from './ipersona.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  loadData(url: string): Observable<IPersona[]> {
    return this.httpClient.get<IPersona[]>(url);
  }

}
