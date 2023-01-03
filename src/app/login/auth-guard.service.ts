import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LogService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: LogService) { }
  
  canActivate() {
      return this.authService.isLoggedIn()
                              .then((isAuth)=>{
                                return isAuth ? true : false
                              });
  }
  
}
