import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl = 'http://localhost:7070/browser/cars-json/success/CARS.json'; // URL de votre backend

  constructor(private http: HttpClient) {}

  // Télécharger le fichier JSON
  downloadFile(): Observable<Blob> {
    return this.http.get(this.apiUrl, { responseType: 'blob' });
  }
}
