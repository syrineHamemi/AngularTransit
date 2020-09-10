import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FournissuerComponent } from './fournissuer/fournissuer.component';
import { ProduitComponent } from './produit/produit.component';
import { CommandeComponent } from './commande/commande.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'fournisseur', component: FournissuerComponent},
  {path:'login', component:LoginComponent}
 /* {
    path: '/login',
    redirectTo: 'login',
    pathMatch: 'full',
   // canActivate:[AuthGuard],
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FournissuerComponent,ProduitComponent,CommandeComponent]