  import { Injectable } from '@angular/core';
  import { Fournisseur } from './../models/fournisseur.model';
  import { HttpHeaders } from '@angular/common/http';
   import { identity, Observable } from 'rxjs';
  import { HttpClient } from '@angular/common/http';
  const headers = new HttpHeaders();



  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');
  @Injectable({
    providedIn: 'root'
  })
  export class FournisseurService {
    baseUrl="http://localhost:3000/"
    headers = new HttpHeaders().set('Content-Type', 'application/json');


    constructor(private http: HttpClient) { }




    public getfournisseur(id: string): Observable<Fournisseur>{
      return this.http.get<Fournisseur>(this.baseUrl+"fournisseur/findFournisseur/"+id,)
    }

    public updatefournisseur(id: string,form: any): Observable<Fournisseur>{
      console.log("service",form)
      return this.http.put<Fournisseur>(this.baseUrl+"fournisseur/findAndUpdateFournisseur/"+id,form)
    }

    public getallFour(): Observable<Fournisseur[]>{
      return this.http.get<Fournisseur[]>(this.baseUrl+"fournisseur/all")
    }

  }
