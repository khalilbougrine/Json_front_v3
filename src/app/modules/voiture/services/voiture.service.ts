import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import { Voiture } from '../models/voiture';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  private apiUrl = 'http://localhost:7070/api/voitures';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getVoitures(page: number, size: number, searchQuery: string = ''): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('searchQuery', searchQuery);

    return this.http.get<any>(this.apiUrl, { params });
  }

  addVoiture(voiture: Voiture): Observable<Voiture> {
    return this.http.post<Voiture>(this.apiUrl, voiture).pipe(
      tap(() => this.toastr.success('Voiture ajoutée avec succès !')),
      catchError((error) => {
        this.toastr.error('Erreur lors de l\'ajout de la voiture');
        throw error; // Lancer l'erreur pour la gestion ultérieure
      })
    );
  }
  updateVoiture(id: number, voiture: Voiture): Observable<Voiture> {
    return this.http.put<Voiture>(`${this.apiUrl}/${id}`, voiture).pipe(
      tap(() => this.toastr.success('Voiture modifiée avec succès !'))
    );
  }

  deleteVoiture(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.toastr.success('Voiture supprimée avec succès !'))
    );
  }

  getVoitureById(id: number): Observable<Voiture> {
    return this.http.get<Voiture>(`${this.apiUrl}/${id}`);
  }
}
