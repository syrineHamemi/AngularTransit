import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
//import {AuthService} from "./auth.service"
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        return true
        
        /*this.authService.authInfo.map(authInfo.isLoggedIn())
        .take(1)
        .do(allowed =>{
            if(!allowed){
                this.router.navigate(['/login'])
            }
        });*/
    }
   
}