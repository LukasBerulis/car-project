import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Car} from '../models/car';

@Injectable()
export class CarService {

  private readonly backendUrl = 'http://localhost:29270';
  private readonly webApiUrl = `${this.backendUrl}/api`;
  private readonly carsApiUrl = `${this.webApiUrl}/cars`;
  private readonly fileUploadUrl = `${this.webApiUrl}/fileUpload` ;
  private readonly imagesUrl = `${this.backendUrl}/images` ;
  private readonly signalrHubUrl = `${this.backendUrl}/signalr` ;
  private readonly notificationsHubName = 'NotificationHub';
  constructor(private http: HttpClient) {
  }

  private get RequestOptions() {
    return {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', 'true')
    }
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsApiUrl);
  }

  getCar(carId: string): Observable<Car> {
    return this.http.get<Car>(`${this.carsApiUrl}/${carId}`);
  }

  addCar(car: Car): Observable<number> {
    const body = JSON.stringify(car); // converts object to JSON
    return this.http.post(this.carsApiUrl, body, this.RequestOptions);
  }

  updateCar(car: Car): Observable<number> {
    const body = JSON.stringify(car);
    console.log(body);
    return this.http.put(this.carsApiUrl, body, this.RequestOptions);
  }

  uploadFile(file: File): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('files', file);

    const req = new HttpRequest('POST', this.fileUploadUrl, formData, {reportProgress: true});
    return this.http.request(req);
  }

  getCarImageUrl(bareImageUrl: string) {
    return `${this.imagesUrl}/${bareImageUrl}`;
  }

  getSignalrHubUrl(): string {
    return this.signalrHubUrl;
  }

  getNotificationsHubName(): string {
    return this.notificationsHubName;
  }
}
