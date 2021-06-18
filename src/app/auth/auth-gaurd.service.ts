import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterState, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGaurdService implements CanActivate{
    constructor(private authService : AuthService){}
    canActivate(router:ActivatedRouteSnapshot,state : RouterStateSnapshot){
                return !this.authService.isAuthenticate();
    }
}