
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { LivraisonComponent } from './livraison/livraison.component';
import { TransporteurComponent } from './transporteur/transporteur.component';
import { FactureComponent } from './facture/facture.component';
import {HttpClientModule} from '@angular/common/http'

//import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
   LivraisonComponent,
   TransporteurComponent,
   FactureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
