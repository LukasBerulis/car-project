import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Tyre} from "../models/tyre";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class TyreService {
  private readonly backendUrl = 'http://localhost:29270';
  private readonly webApiUrl = `${this.backendUrl}/api`;
  private readonly tyresApiUrl = `${this.webApiUrl}/tyres`;

  constructor(private http: HttpClient) { }

  getTyres(): Observable<Tyre[]> {
    return this.http.get<Tyre[]>(this.tyresApiUrl);
  }

  getTyre(tyreId: string): Observable<Tyre> {
    return this.http.get<Tyre>(`${this.tyresApiUrl}/${tyreId}`);
  }

  addTyre(tyre: Tyre): Observable<number> {
    const body = JSON.stringify(tyre); // converts object to JSON
    return this.http.post(this.tyresApiUrl, body, this.RequestOptions);
  }


  private get RequestOptions() {
    return {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', 'true')
    }
  }
}
