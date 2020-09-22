import { Injectable, } from '@angular/core';
import {HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import{fournisseur}from 'src/app/fournissuer/fournissuer'
@Injectable({
  providedIn: 'root'
})
export class FournisseurServiceService {
  private fouurnissuerurl :string;
  

  constructor(private http:HttpClient) {
    this.fouurnissuerurl='http://localhost:7896/fournisseurs';
   }

   public findAll(): Observable<fournisseur[]> {

    console.log("coucou");
     console.log(this.http.get<fournisseur[]>(this.fouurnissuerurl));
    return this.http.get<fournisseur[]>(this.fouurnissuerurl);
  }
 
  public save(four: fournisseur) {
    return this.http.post<fournisseur>(this.fouurnissuerurl, four);
  }

 




}
