import { Injectable } from '@angular/core';
import {commande} from 'src/app/commande/commande'
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private commandeurl :string;
  constructor(private http:HttpClient) { 
    this.commandeurl='http://localhost:7896/commandes';

  }

  
  public findAll(): Observable<commande[]> {

    console.log("coucou");
     console.log(this.http.get<commande[]>(this.commandeurl));
    return this.http.get<commande[]>(this.commandeurl);
  }
}
