import { Categorie } from '../models/categorie.model';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const headers = new HttpHeaders();

headers.append('Content-Type', 'multipart/form-data');
headers.append('Accept', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  baseUrl="http://localhost:3000/"
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  public save(form: any): Observable<any> {
    return this.http.post(this.baseUrl + "categories/create", form)
  }
  public getcategorie(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.baseUrl+"categories/all")
  }
}
