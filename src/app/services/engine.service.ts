import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Engine} from '../models/engine';

@Injectable()
export class EngineService {

  private readonly backendUrl = 'http://localhost:29270';
  private readonly webApiUrl = `${this.backendUrl}/api`;
  private readonly engineApiUrl = `${this.webApiUrl}/engines`;

  constructor(private http: HttpClient) { }

  getEngines(): Observable<Engine[]> {
    return this.http.get<Engine[]>(this.engineApiUrl);
  }

  getEngine(engineId: string): Observable<Engine> {
    return this.http.get<Engine>(`${this.engineApiUrl}/${engineId}`);
  }

  addEngine(tyre: Engine): Observable<number> {
    const body = JSON.stringify(tyre); // converts object to JSON
    console.log(body);
    return this.http.post(this.engineApiUrl, body, this.RequestOptions);
  }


  private get RequestOptions() {
    return {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', 'true')
    }
  }
}
