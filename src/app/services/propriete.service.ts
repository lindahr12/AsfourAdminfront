  import { Propriete } from '../models/propreite.model';
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
  export class ProprieteService{
    baseUrl="http://localhost:3000/"
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }


    public save(form: any): Observable<any> {
      return this.http.post(this.baseUrl + "propriete/create", form)
    }
    public getpropriete(): Observable<Propriete []>{
      return this.http.get<Propriete[]>(this.baseUrl+"propriete/all")
    }
  }

