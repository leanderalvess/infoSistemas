import { Injectable } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private apiUrl = AppConfig.apiUrl;

  constructor(private http: HttpClient) {}

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  getVehicles(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  createVehicle(vehicle: any): Observable<any> {
    return this.http.post(this.apiUrl, vehicle);
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  updateVehicle(id: string, vehicle: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, vehicle);
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  deleteVehicle(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
